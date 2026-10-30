import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { generateMeetingSummaryWithAI, generateFollowUpEmailWithAI } from "@/lib/deepseek";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);
    const authHeader = request.headers.get("Authorization");
    const workerSecret = process.env.WORKER_SECRET || "dev-secret-key";
    const isWorker = authHeader === `Bearer ${workerSecret}`;

    let meeting;
    let userName = "the presenter";

    if (isWorker) {
      meeting = await prisma.scheduledMeeting.findUnique({
        where: { id },
        include: { video: true, user: true },
      });
      if (!meeting) return new NextResponse("Not Found", { status: 404 });
      userName = meeting.user?.name || "the presenter";
    } else {
      const session = await getServerSession(authOptions);
      if (!session?.user?.email) {
        return new NextResponse("Unauthorized", { status: 401 });
      }

      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      if (!user) return new NextResponse("Unauthorized", { status: 401 });

      meeting = await prisma.scheduledMeeting.findUnique({
        where: { id },
        include: { video: true },
      });
      if (!meeting || meeting.userId !== user.id) {
        return new NextResponse("Not Found", { status: 404 });
      }
      userName = user.name || "the presenter";
    }

    const title = meeting.title || "Meeting";

    // Parse existing recorded mentions or questions
    let existingMentions: any[] = [];
    if (meeting.mentions) {
      try { existingMentions = JSON.parse(meeting.mentions); } catch {}
    }
    let existingQuestions: any[] = [];
    if (meeting.attendeeQuestions) {
      try { existingQuestions = JSON.parse(meeting.attendeeQuestions); } catch {}
    }

    // Call DeepSeek AI to generate executive summary & action items
    const aiSummary = await generateMeetingSummaryWithAI({
      title,
      userName,
      talkingPoints: meeting.talkingPoints,
      documentName: meeting.documentName,
      keywordAlerts: meeting.keywordAlerts,
      detectedMentions: existingMentions,
      attendeeQuestions: existingQuestions,
    });

    const summary = JSON.stringify(aiSummary);

    // Call DeepSeek AI to generate follow-up email draft
    const followUpDraft = await generateFollowUpEmailWithAI({
      title,
      userName,
      summaryBullets: aiSummary.bullets,
      actionItems: aiSummary.actionItems,
      attendeeQuestions: existingQuestions,
    });

    const updated = await prisma.scheduledMeeting.update({
      where: { id },
      data: {
        summary,
        followUpDraft,
        mentions: meeting.mentions || JSON.stringify([]),
        attendeeQuestions: meeting.attendeeQuestions || JSON.stringify([]),
      },
    });

    return NextResponse.json({
      success: true,
      summary: aiSummary,
      followUpDraft,
      mentions: JSON.parse(updated.mentions || "[]"),
      attendeeQuestions: JSON.parse(updated.attendeeQuestions || "[]"),
    });
  } catch (error) {
    console.error("Error generating meeting summary with DeepSeek:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
