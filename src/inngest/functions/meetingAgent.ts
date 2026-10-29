import { inngest } from "@/lib/inngest";
import { prisma } from "@/lib/prisma";
import { getGoogleTokensForUser, refreshGoogleAccessToken } from "@/lib/googleAuth";

async function logEvent(meetingId: string, status: string, level: string, message: string) {
  try {
    let log = await prisma.executionLog.findUnique({
      where: { meetingId },
    });

    if (!log) {
      log = await prisma.executionLog.create({
        data: {
          meetingId,
          status,
          startedAt: new Date(),
        },
      });
    } else {
      await prisma.executionLog.update({
        where: { id: log.id },
        data: {
          status,
          completedAt: ["completed", "failed"].includes(status) ? new Date() : undefined,
        },
      });
    }

    await prisma.executionEvent.create({
      data: {
        logId: log.id,
        event: message,
        type: level === "error" ? "error" : level === "success" ? "success" : "info",
        timestamp: new Date(),
      },
    });
  } catch (err) {
    console.error(`[logEvent] Error saving execution event for ${meetingId}:`, err);
  }
}

export const runMeetingAgent = inngest.createFunction(
  { id: "run-meeting-agent", name: "Run Odally Agent", retries: 2, triggers: [{ event: "meeting/scheduled" }] },
  async ({ event, step }) => {
    const { meetingId } = event.data;

    const meeting = await step.run("load-meeting", async () => {
      const m = await prisma.scheduledMeeting.findUnique({
        where: { id: meetingId },
        include: { video: true },
      });
      if (!m) throw new Error(`Meeting ${meetingId} not found`);
      return m;
    });

    const scheduledTime = new Date(meeting.scheduledAt).getTime();
    const now = Date.now();
    if (scheduledTime > now) {
      const targetJoinTime = new Date(Math.max(now, scheduledTime - 15 * 1000));
      if (targetJoinTime.getTime() > now) {
        await step.sleepUntil("wait-until-join-time", targetJoinTime);
      }
    }

    await step.run("mark-launching", async () => {
      await prisma.scheduledMeeting.update({
        where: { id: meetingId },
        data: { status: "launching" },
      });
      await logEvent(meetingId, "launching", "info", "Agent is preparing to join the meeting.");
    });

    const { accessToken, refreshToken } = await step.run("get-google-tokens", async () => {
      try {
        const tokens = await getGoogleTokensForUser(meeting.userId);
        let accessToken = tokens.access_token;
        if (tokens.expires_at && tokens.expires_at * 1000 < Date.now() && tokens.refresh_token) {
          accessToken = await refreshGoogleAccessToken(tokens.refresh_token);
        }
        return { accessToken, refreshToken: tokens.refresh_token };
      } catch (err) {
        console.warn("[Inngest] No user Google tokens, relying on worker bot-profile:", err);
        return { accessToken: null, refreshToken: null };
      }
    });

    const videoUrl = await step.run("generate-video-url", async () => {
      if (meeting.materialType === "video" && meeting.video) {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
        const token = process.env.WORKER_SECRET || "dev-secret-key";
        return `${appUrl}/api/videos/${meeting.video.id}/stream?token=${token}`;
      }
      return null;
    });

    const jobId = await step.run("launch-worker", async () => {
      const workerUrl = process.env.PLAYWRIGHT_WORKER_URL || "http://localhost:8080";
      const workerSecret = process.env.WORKER_SECRET || "dev-secret-key";

      const res = await fetch(`${workerUrl}/run`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${workerSecret}`,
        },
        body: JSON.stringify({
          meetingId,
          meetUrl: meeting.meetUrl,
          videoUrl,
          accessToken,
          refreshToken,
          scheduledAt: meeting.scheduledAt,
          agentConfig: {
            introMessage:
              meeting.introMessage ||
              "Hi everyone. I'm joining on behalf of the presenter. The session will begin shortly.",
          },
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Worker rejected job: ${res.status} ${text}`);
      }

      const data = await res.json();
      return data.jobId;
    });

    await step.run("mark-running", async () => {
      await prisma.scheduledMeeting.update({
        where: { id: meetingId },
        data: { status: "running" },
      });
      await logEvent(meetingId, "running", "info", "Agent has joined the meeting.");
    });

    // Poll worker status
    for (let i = 0; i < 120; i++) {
      await step.sleep(`sleep-poll-${i}`, "30s");
      const status = await step.run(`check-status-${i}`, async () => {
        const workerUrl = process.env.PLAYWRIGHT_WORKER_URL || "http://localhost:8080";
        const res = await fetch(`${workerUrl}/status/${jobId}`, {
          headers: { "Authorization": `Bearer ${process.env.WORKER_SECRET || "dev-secret-key"}` },
        });
        if (!res.ok) return "unknown";
        const data = await res.json();
        return data.status as string;
      });

      if (status === "completed" || status === "failed") {
        await step.run("mark-final", async () => {
          await prisma.scheduledMeeting.update({
            where: { id: meetingId },
            data: { status },
          });
          await logEvent(meetingId, status, status === "failed" ? "error" : "info", `Meeting ${status}`);
        });

        if (status === "completed") {
          await step.run("auto-generate-summary", async () => {
            try {
              const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
              const workerSecret = process.env.WORKER_SECRET || "dev-secret-key";
              await fetch(`${appUrl}/api/meetings/${meetingId}/generate-summary`, {
                method: "POST",
                headers: {
                  "Authorization": `Bearer ${workerSecret}`,
                  "Content-Type": "application/json",
                },
              });
            } catch (err) {
              console.warn(`[Inngest] Auto summary generation non-fatal error for ${meetingId}:`, err);
            }
          });
        }

        return { success: status === "completed" };
      }
    }

    return { success: true };
  }
);
