import { NextResponse, connection } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { fetchGoogleCalendarEvents } from "@/lib/googleAuth";
import { inngest } from "@/lib/inngest";

export async function POST(request: Request) {
  await connection();
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any)?.id;
    let user = null;
    if (userId) {
      user = await prisma.user.findUnique({ where: { id: userId } });
    }
    if (!user) {
      user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json().catch(() => ({}));
    const { eventId, customTitle, talkingPoints, introMessage, keywordAlerts } = body;

    if (!eventId) {
      return NextResponse.json(
        { error: "Event ID is required. Please select a specific call to dispatch Odally." },
        { status: 400 }
      );
    }

    // Fetch live events from Google Calendar
    const googleEvents = await fetchGoogleCalendarEvents(user.id);
    const targetEvent = googleEvents.find((e: any) => e.id === eventId);

    if (!targetEvent || !targetEvent.meetUrl) {
      return NextResponse.json(
        { error: "Google Meet event not found or does not have a Google Meet link." },
        { status: 404 }
      );
    }

    // Check if already imported
    const existing = await prisma.scheduledMeeting.findFirst({
      where: {
        userId: user.id,
        meetUrl: targetEvent.meetUrl,
        scheduledAt: new Date(targetEvent.scheduledAt),
      },
    });

    if (existing) {
      return NextResponse.json({
        success: true,
        alreadyImported: true,
        meeting: existing,
        message: `Odally is already scheduled for "${existing.title}".`,
      });
    }

    const defaultIntro = `Hi everyone! I'm Odally attending on behalf of ${
      user.name || "the presenter"
    }. I'll be presenting their material and taking notes today.`;

    const newMeeting = await prisma.scheduledMeeting.create({
      data: {
        userId: user.id,
        title: customTitle || targetEvent.title,
        meetUrl: targetEvent.meetUrl,
        scheduledAt: new Date(targetEvent.scheduledAt),
        timezone: user.timezone || "UTC",
        materialType: "notes",
        talkingPoints: talkingPoints || targetEvent.description || null,
        introMessage: introMessage || defaultIntro,
        keywordAlerts: keywordAlerts || user.name || null,
        settings: { googleEventId: targetEvent.id, attendees: targetEvent.attendees },
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

    return NextResponse.json({
      success: true,
      importedCount: 1,
      meeting: newMeeting,
      message: `Successfully scheduled Odally for "${newMeeting.title}"!`,
    });
  } catch (error: any) {
    console.error("[Google Calendar Sync] Error:", error);
    const message = error?.message || "Failed to sync calendar events";
    const needsAuth =
      message.includes("No connected Google account") ||
      message.includes("Token refresh failed") ||
      message.includes("unauthorized_client") ||
      message.includes("401");

    return NextResponse.json(
      {
        error: message,
        needsAuth,
      },
      { status: needsAuth ? 401 : 500 }
    );
  }
}
