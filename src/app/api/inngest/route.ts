import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import { runMeetingAgent } from "@/inngest/functions/meetingAgent";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [runMeetingAgent],
});
