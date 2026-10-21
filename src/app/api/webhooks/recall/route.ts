import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * Recall.ai Webhook
 *
 * Recall.ai posts real-time status updates here as the bot progresses.
 * Configure this URL in the Recall.ai dashboard:
 *   https://app.recall.ai → Webhooks → Add endpoint
 *   URL: https://your-domain.com/api/webhooks/recall
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const { event, data } = payload;

    // We store the meeting ID in the bot's metadata when creating it
    // For now we look up the meeting by a join — in production you'd store bot_id on the meeting
    console.log("[Recall Webhook]", event, data);

    if (event === "bot.status_change") {
      const botId = data?.bot?.id;
      const statusCode = data?.bot?.status?.code;

      if (!botId || !statusCode) return NextResponse.json({ ok: true });

      // Map Recall status codes to our internal status
      const statusMap: Record<string, string> = {
        "joining_call":            "joining",
        "in_waiting_room":         "joining",
        "in_call_not_recording":   "presenting",
        "in_call_recording":       "presenting",
        "call_ended":              "completed",
        "done":                    "completed",
        "fatal":                   "failed",
      };

      const newStatus = statusMap[statusCode];
      if (!newStatus) return NextResponse.json({ ok: true });

      // Find meeting by recall bot id (we'd need to store this — handled in Inngest function)
      // For now log the event
      console.log(`[Recall] Bot ${botId} status: ${statusCode} → ${newStatus}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Recall Webhook Error]", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
