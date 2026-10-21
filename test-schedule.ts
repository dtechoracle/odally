import { PrismaClient } from "@prisma/client";
import { Inngest } from "inngest";

const prisma = new PrismaClient();
const inngest = new Inngest({ id: "meeting-agent", eventKey: process.env.INNGEST_EVENT_KEY || "local" });

async function run() {
  const userId = "1cebf814-64c8-451f-b33f-4b1517115162";
  const videoId = "778e867a-f53a-4045-8491-8e471d7bd001";
  const meetUrl = "https://meet.google.com/xnw-kymv-nmr";

  console.log("Creating scheduled meeting for right now...");
  const meeting = await prisma.scheduledMeeting.create({
    data: {
      userId,
      videoId,
      title: "Agent Test Run",
      meetUrl,
      scheduledAt: new Date(), // Right now
      timezone: "UTC",
      status: "scheduled",
      settings: { presentationEnabled: true }
    }
  });

  console.log("Created meeting:", meeting.id);
  console.log("Sending event to Inngest...");

  await inngest.send({
    name: "meeting/scheduled",
    data: { meetingId: meeting.id }
  });

  console.log("Event sent! The worker should boot up immediately.");
}

run().catch(console.error).finally(() => prisma.$disconnect());
