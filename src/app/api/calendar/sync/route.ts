import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { fetchGoogleCalendarEvents } from "@/lib/googleAuth";
import { inngest } from "@/lib/inngest";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json().catch(() => ({}));
    const { eventId, customTitle, talkingPoints, introMessage, keywordAlerts } = body;

    // Fetch live events from Google Calendar
    const googleEvents = await fetchGoogleCalendarEvents(user.id);

    // If specific eventId is requested, import that one
    const eventsToImport = eventId
      ? googleEvents.filter((e: any) => e.id === eventId)
      : googleEvents.filter((e: any) => e.hasMeetLink);

    if (eventsToImport.length === 0) {
      return NextResponse.json({
        success: true,
        importedCount: 0,
        message: "No Google Meet events found to sync.",
      });
    }

    const importedMeetings = [];

    for (const evt of eventsToImport) {
      if (!evt.meetUrl) continue;

      // Check if already imported
      const existing = await prisma.scheduledMeeting.findFirst({
        where: {
          userId: user.id,
          meetUrl: evt.meetUrl,
          scheduledAt: new Date(evt.scheduledAt),
        },
      });

      if (existing) {
        importedMeetings.push(existing);
        continue;
      }

      const defaultIntro = `Hi everyone! I'm Odally attending on behalf of ${
        user.name || "the presenter"
      }. I'll be presenting their material and taking notes today.`;

      const newMeeting = await prisma.scheduledMeeting.create({
        data: {
          userId: user.id,
          title: customTitle || evt.title,
          meetUrl: evt.meetUrl,
          scheduledAt: new Date(evt.scheduledAt),
          timezone: user.timezone || "UTC",
          materialType: "notes",
          talkingPoints: talkingPoints || evt.description || null,
          introMessage: introMessage || defaultIntro,
          keywordAlerts: keywordAlerts || user.name || null,
          settings: { googleEventId: evt.id, attendees: evt.attendees },
          status: "scheduled",
        },
      });

      // Schedule background job with Inngest
      try {
        await inngest.send({
          name: "meeting/scheduled",
          data: { meetingId: newMeeting.id },
        });
      } catch (inngestErr) {
        console.warn("[Inngest] Could not queue meeting event:", inngestErr);
      }

      importedMeetings.push(newMeeting);
    }

    return NextResponse.json({
      success: true,
      importedCount: importedMeetings.length,
      meetings: importedMeetings,
    });
  } catch (error: any) {
    console.error("[Google Calendar Sync] Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to sync calendar events" },
      { status: 500 }
    );
  }
}
