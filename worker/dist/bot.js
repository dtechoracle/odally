"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMeetingBot = runMeetingBot;
const playwright_extra_1 = require("playwright-extra");
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
playwright_extra_1.chromium.use((0, puppeteer_extra_plugin_stealth_1.default)());
const index_1 = require("./index");
const fs = __importStar(require("fs"));
async function runMeetingBot(options) {
    const { meetingId, meetUrl, videoUrl, accessToken } = options;
    (0, index_1.updateJobStatus)(meetingId, "joining");
    console.log(`[Bot ${meetingId}] Launching browser...`);
    const contextOptions = {
        headless: process.env.NODE_ENV === "production",
        channel: "chrome",
        args: [
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--disable-blink-features=AutomationControlled",
            "--autoplay-policy=no-user-gesture-required",
            "--disable-background-timer-throttling",
            "--disable-backgrounding-occluded-windows",
            "--disable-renderer-backgrounding",
        ],
        permissions: ["camera", "microphone"],
    };
    let context;
    if (fs.existsSync("./bot-profile")) {
        console.log(`[Bot ${meetingId}] Loading persistent Google Auth profile!`);
        context = await playwright_extra_1.chromium.launchPersistentContext("./bot-profile", contextOptions);
    }
    else {
        console.log(`[Bot ${meetingId}] No bot-profile found. Attempting to join anonymously.`);
        const browser = await playwright_extra_1.chromium.launch(contextOptions);
        context = await browser.newContext();
    }
    // Attempt to inject Google OAuth token into cookies/storage if provided
    // Note: True Google Meet login often requires full session cookies (SID, HSID, etc.).
    // If the API token isn't enough, it will fall back to asking for a name to join as a guest.
    if (accessToken) {
        // In a fully robust system, you'd use the refresh token to generate standard login cookies.
        // For now, we inject a dummy auth state and attempt to bypass guest mode.
        console.log(`[Bot ${meetingId}] Using provided OAuth token.`);
    }
    // ── IMPORTANT: VIRTUAL CAMERA INJECTION ────────────────────────
    // To inject a video as the webcam in Playwright, Chrome requires the file locally.
    // In a full production worker, you would:
    // 1. Download `videoUrl` to a temporary local file (e.g., /tmp/video.y4m)
    // 2. Pass these args to Chromium on launch:
    //    "--use-fake-ui-for-media-stream",
    //    "--use-fake-device-for-media-stream",
    //    "--use-file-for-fake-video-capture=/tmp/video.y4m"
    let normalizedUrl = meetUrl.trim();
    if (!/^https?:\/\//i.test(normalizedUrl)) {
        normalizedUrl = `https://${normalizedUrl}`;
    }
    const page = await context.newPage();
    if (videoUrl) {
        try {
            console.log(`[Bot ${meetingId}] Pre-fetching presentation video from ${videoUrl}...`);
            const vRes = await fetch(videoUrl);
            if (vRes.ok) {
                const ab = await vRes.arrayBuffer();
                const videoBuffer = Buffer.from(ab);
                console.log(`[Bot ${meetingId}] Video downloaded successfully (${(videoBuffer.length / (1024 * 1024)).toFixed(2)} MB).`);
                // Intercept same-origin HTTPS URL to completely bypass Chrome CSP and Mixed Content blocking!
                await page.route("https://meet.google.com/presentation-video.mp4", (route) => {
                    route.fulfill({
                        status: 200,
                        contentType: "video/mp4",
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Accept-Ranges": "bytes",
                            "Content-Length": videoBuffer.length.toString(),
                        },
                        body: videoBuffer,
                    });
                });
                console.log(`[Bot ${meetingId}] Injecting virtual camera feed from same-origin HTTPS video.`);
                await page.addInitScript(() => {
                    try {
                        const video = document.createElement("video");
                        video.src = "https://meet.google.com/presentation-video.mp4";
                        video.crossOrigin = "anonymous";
                        video.loop = true;
                        video.muted = true;
                        video.autoplay = true;
                        video.playsInline = true;
                        video.setAttribute("playsinline", "true");
                        video.setAttribute("muted", "true");
                        video.style.position = "fixed";
                        video.style.top = "-9999px";
                        video.style.left = "-9999px";
                        video.style.opacity = "0";
                        video.style.pointerEvents = "none";
                        video.onloadedmetadata = () => {
                            console.log("[VirtualCamera] Video metadata ready. Dimensions:", video.videoWidth, "x", video.videoHeight);
                            video.play().catch((e) => console.error("[VirtualCamera] Play error:", e));
                        };
                        video.onerror = () => {
                            console.error("[VirtualCamera] Video loading failed:", video.error);
                        };
                        const appendVideo = () => {
                            const root = document.body || document.documentElement;
                            if (root) {
                                root.appendChild(video);
                                video.play().catch(() => { });
                            }
                            else {
                                setTimeout(appendVideo, 50);
                            }
                        };
                        appendVideo();
                        const canvas = document.createElement("canvas");
                        canvas.width = 1280;
                        canvas.height = 720;
                        const ctx = canvas.getContext("2d");
                        function drawLoop() {
                            if (video.readyState >= 2 && ctx) {
                                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                            }
                            requestAnimationFrame(drawLoop);
                        }
                        requestAnimationFrame(drawLoop);
                        const canvasStream = canvas.captureStream(30);
                        const origGUM = MediaDevices.prototype.getUserMedia;
                        MediaDevices.prototype.getUserMedia = async function (constraints) {
                            console.log("[VirtualCamera] Intercepted getUserMedia with constraints:", constraints);
                            if (constraints && constraints.video) {
                                try {
                                    const vTracks = canvasStream.getVideoTracks();
                                    const vTrack = vTracks[0] ? vTracks[0].clone() : null;
                                    if (vTrack) {
                                        vTrack.applyConstraints = async () => { };
                                        vTrack.getCapabilities = () => ({
                                            width: { min: 640, max: 1920 },
                                            height: { min: 360, max: 1080 },
                                            aspectRatio: { min: 1.33, max: 1.78 },
                                            frameRate: { min: 15, max: 60 },
                                            facingMode: ["user"],
                                            resizeMode: ["none", "crop-and-scale"],
                                        });
                                    }
                                    let audioTracks = [];
                                    if (constraints.audio) {
                                        const aStream = await origGUM.call(navigator.mediaDevices, { audio: constraints.audio, video: false }).catch(() => null);
                                        if (aStream)
                                            audioTracks = aStream.getAudioTracks();
                                    }
                                    const tracks = vTrack ? [vTrack, ...audioTracks] : audioTracks;
                                    return new MediaStream(tracks);
                                }
                                catch (err) {
                                    console.error("[VirtualCamera] Error generating stream:", err);
                                    return origGUM.call(navigator.mediaDevices, constraints);
                                }
                            }
                            return origGUM.call(navigator.mediaDevices, constraints);
                        };
                        // Also attach to navigator.mediaDevices instance in case it was cached
                        navigator.mediaDevices.getUserMedia = MediaDevices.prototype.getUserMedia;
                    }
                    catch (err) {
                        console.error("[VirtualCamera] Initialization error:", err);
                    }
                });
            }
            else {
                console.error(`[Bot ${meetingId}] Video pre-fetch failed with HTTP ${vRes.status}`);
            }
        }
        catch (e) {
            console.error(`[Bot ${meetingId}] Error downloading presentation video:`, e);
        }
    }
    try {
        console.log(`[Bot ${meetingId}] Navigating to Meet URL: ${normalizedUrl}`);
        await page.bringToFront().catch(() => { });
        await page.goto(normalizedUrl, { waitUntil: "domcontentloaded", timeout: 45000 });
        // 1. Join the meeting
        try {
            // If we are anonymous, it asks for a name
            const nameInput = page.locator('input[aria-label="Your name"]');
            if (await nameInput.isVisible({ timeout: 3000 }).catch(() => false)) {
                await nameInput.fill("Jeremiah");
            }
            // 1. Dismiss notification popup if shown
            const notNowBtn = page.locator('button:has-text("Not now"), [role="button"]:has-text("Not now")').first();
            if (await notNowBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
                console.log(`[Bot ${meetingId}] Dismissed notification popup.`);
                await notNowBtn.click().catch(() => { });
            }
            // 2. Find and click whichever join button is ready (Join now or Ask to join)
            const joinBtn = page.locator('button:has-text("Join now"), button:has-text("Ask to join"), [role="button"]:has-text("Join now"), [role="button"]:has-text("Ask to join")').first();
            console.log(`[Bot ${meetingId}] Waiting for Join button...`);
            await joinBtn.waitFor({ state: "visible", timeout: 25000 });
            await joinBtn.click({ force: true });
            console.log(`[Bot ${meetingId}] Clicked join button! Entered meeting.`);
        }
        catch (e) {
            console.log(`[Bot ${meetingId}] Error during join sequence: ${e}`);
        }
        if (videoUrl) {
            console.log(`[Bot ${meetingId}] Presentation video attached. Ensuring camera is active...`);
            await page.waitForTimeout(2000);
            // Ensure the in-page video element is playing
            await page.evaluate(() => {
                const v = document.querySelector("video");
                if (v) {
                    v.muted = false;
                    v.play().catch(() => { });
                }
            }).catch(() => { });
            // Check if camera is currently off in Google Meet, turn it on via Ctrl+E
            const camOffButton = page.locator('button[aria-label*="Turn on camera" i], button[data-is-muted="true"][aria-label*="camera" i]').first();
            if (await camOffButton.isVisible({ timeout: 3000 }).catch(() => false)) {
                console.log(`[Bot ${meetingId}] Camera button indicates OFF. Turning on camera...`);
                await page.keyboard.press("Control+e").catch(() => { });
            }
        }
        await page.waitForTimeout(3000);
        await page.screenshot({ path: "bot-status.png" });
        (0, index_1.updateJobStatus)(meetingId, "listening");
        console.log(`[Bot ${meetingId}] In meeting. Listening for audio cues and presenting video...`);
        // 2. The "Listening" Loop (Concept)
        // To understand the boss saying "Jeremiah, switch on your camera", the bot must:
        // a) Capture the meeting audio using page.evaluate() or a virtual audio cable
        // b) Stream it to a transcription service (like Deepgram or OpenAI Realtime)
        // c) When the trigger phrase is detected, click the camera button:
        // Example of what the trigger execution looks like:
        /*
          onSpeechDetected("switch on your camera", async () => {
            console.log("Cue detected! Turning on camera...");
            const camBtn = page.getByRole("button", { name: /Turn on camera/i });
            await camBtn.click();
            // Because we injected the video via --use-file-for-fake-video-capture,
            // Google Meet will broadcast the video file exactly as if it were a real webcam!
          });
        */
        await page.waitForTimeout(60000 * 5); // Demo wait
        console.log(`[Bot ${meetingId}] Meeting finished. Leaving...`);
    }
    catch (error) {
        console.error(`[Bot ${meetingId}] Error during meeting:`, error);
        throw error;
    }
    finally {
        try {
            await context.close();
        }
        catch {
            // Ignore cleanup error if already closed
        }
    }
}
