"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJobStatus = void 0;
const express_1 = __importDefault(require("express"));
const bot_1 = require("./bot");
const app = (0, express_1.default)();
app.use(express_1.default.json());
process.on("unhandledRejection", (err) => {
    console.error("[Worker] Unhandled rejection:", err);
});
process.on("uncaughtException", (err) => {
    console.error("[Worker] Uncaught exception:", err);
});
const PORT = process.env.PORT || 8080;
const WORKER_SECRET = process.env.WORKER_SECRET || "dev-secret-key";
// Simple in-memory store to track running jobs
const jobs = new Map();
// Auth middleware
app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${WORKER_SECRET}`) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
});
// Launch a new bot
app.post("/run", async (req, res) => {
    const { meetingId, meetUrl, videoUrl, accessToken, refreshToken, agentConfig } = req.body;
    if (!meetingId || !meetUrl) {
        return res.status(400).json({ error: "Missing required parameters (meetingId and meetUrl are required)" });
    }
    // Record job as starting
    jobs.set(meetingId, { status: "launching" });
    // Fire and forget the actual bot process
    (0, bot_1.runMeetingBot)({ meetingId, meetUrl, videoUrl, accessToken, refreshToken, agentConfig })
        .then(() => {
        jobs.set(meetingId, { status: "completed" });
    })
        .catch((err) => {
        console.error(`[Job ${meetingId}] Failed:`, err);
        jobs.set(meetingId, { status: "failed", error: err.message });
    });
    return res.status(202).json({ jobId: meetingId, status: "launching" });
});
// Check bot status
app.get("/status/:jobId", (req, res) => {
    const { jobId } = req.params;
    const job = jobs.get(jobId);
    if (!job) {
        return res.status(404).json({ error: "Job not found" });
    }
    return res.json(job);
});
// Update bot status internally (called by the bot script)
const updateJobStatus = (jobId, status) => {
    const job = jobs.get(jobId);
    if (job) {
        jobs.set(jobId, { ...job, status });
    }
};
exports.updateJobStatus = updateJobStatus;
app.listen(PORT, () => {
    console.log(`🤖 Playwright Worker listening on port ${PORT}`);
});
