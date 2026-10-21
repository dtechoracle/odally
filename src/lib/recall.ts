/**
 * Recall.ai Client
 *
 * Recall.ai is a Meeting Bot API — it spins up a headless browser,
 * joins Google Meet / Zoom / Teams, and streams your video into the call.
 *
 * Docs: https://docs.recall.ai
 * Sign up: https://www.recall.ai
 */

const RECALL_BASE = "https://us-west-2.recall.ai/api/v1";

function headers() {
  const key = process.env.RECALL_API_KEY;
  if (!key) throw new Error("RECALL_API_KEY is not set in environment variables.");
  return {
    "Authorization": `Token ${key}`,
    "Content-Type": "application/json",
  };
}

export type RecallBotStatus =
  | "ready"
  | "joining_call"
  | "in_waiting_room"
  | "in_call_not_recording"
  | "in_call_recording"
  | "call_ended"
  | "done"
  | "fatal";

export interface RecallBot {
  id: string;
  status: { code: RecallBotStatus };
  meeting_url: string;
}

/**
 * Create a Recall bot that joins a meeting and plays a video output.
 */
export async function createRecallBot({
  meetUrl,
  botName = "Odally",
  videoUrl,
  startTime,
}: {
  meetUrl: string;
  botName?: string;
  videoUrl: string;
  startTime?: string; // ISO string — if provided, Recall schedules it
}): Promise<RecallBot> {
  const body: Record<string, unknown> = {
    meeting_url: meetUrl,
    bot_name: botName,

    // Output video to the call — this is how the bot "presents"
    output_media: {
      camera: {
        kind: "webpage",
        config: {
          url: `${process.env.NEXTAUTH_URL}/bot-player?videoUrl=${encodeURIComponent(videoUrl)}`,
        },
      },
      screenshare: {
        kind: "webpage",
        config: {
          url: `${process.env.NEXTAUTH_URL}/bot-player?videoUrl=${encodeURIComponent(videoUrl)}`,
        },
      },
    },
  };

  // Optionally schedule in advance
  if (startTime) {
    body.scheduled_at = startTime;
  }

  const res = await fetch(`${RECALL_BASE}/bot/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Recall.ai bot creation failed: ${error}`);
  }

  return res.json();
}

/**
 * Get the current status of a bot.
 */
export async function getRecallBot(botId: string): Promise<RecallBot> {
  const res = await fetch(`${RECALL_BASE}/bot/${botId}/`, {
    headers: headers(),
  });

  if (!res.ok) throw new Error(`Failed to fetch bot ${botId}`);
  return res.json();
}

/**
 * Tell the bot to leave the meeting.
 */
export async function stopRecallBot(botId: string): Promise<void> {
  await fetch(`${RECALL_BASE}/bot/${botId}/leave_call/`, {
    method: "POST",
    headers: headers(),
  });
}
