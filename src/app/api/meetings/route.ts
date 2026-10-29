import { NextResponse, connection } from "next/server";
import { PrismaClient } from "@prisma/client";
import { inngest } from "@/lib/inngest";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  await connection();
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = user.id;

    const meetings = await prisma.scheduledMeeting.findMany({
      where: { userId },
      orderBy: { scheduledAt: "asc" },
      include: {
        video: {
          select: { title: true, durationFormatted: true }
        }
      }
    });

    const formattedMeetings = meetings.map((m) => ({
      ...m,
      videoTitle: m.video?.title || null,
      videoDuration: m.video?.durationFormatted || null,
    }));

    return NextResponse.json({ meetings: formattedMeetings });
  } catch (error) {
    console.error("Error fetching meetings:", error);
    return NextResponse.json({ error: "Failed to fetch meetings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = user.id;

    const body = await request.json();
    const {
      title,
      meetUrl,
      scheduledAt,
      timezone,
      videoId,
      settings,
      materialType,
      documentUrl,
      documentName,
      talkingPoints,
      introMessage,
      keywordAlerts,
    } = body;

    let cleanMeetUrl = meetUrl?.trim() || "";
    if (cleanMeetUrl && !/^https?:\/\//i.test(cleanMeetUrl)) {
      cleanMeetUrl = `https://${cleanMeetUrl}`;
    }

    // Default polite introduction if not provided
    const defaultIntro = `Hi everyone! I'm Odally here on behalf of ${user.name || "the presenter"}. I'll be sharing their material and taking notes for them today.`;

    const meeting = await prisma.scheduledMeeting.create({
      data: {
        userId,
        title,
        meetUrl: cleanMeetUrl,
        scheduledAt: new Date(scheduledAt),
        timezone,
        videoId: videoId || null,
        materialType: materialType || (videoId ? "video" : "notes"),
        documentUrl: documentUrl || null,
        documentName: documentName || null,
        talkingPoints: talkingPoints || null,
        introMessage: introMessage || defaultIntro,
        keywordAlerts: keywordAlerts || user.name || null,
        settings: settings || {},
        status: "scheduled",
      },
    });

    // Fire the Inngest background job — it will sleep until meeting time then launch the bot
    await inngest.send({
      name: "meeting/scheduled",
      data: { meetingId: meeting.id },
    });

    return NextResponse.json({ meeting }, { status: 201 });
  } catch (error) {
    console.error("Error creating meeting:", error);
    return NextResponse.json({ error: "Failed to create meeting" }, { status: 500 });
  }
}
