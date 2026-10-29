import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> | { id: string } }) {
  try {
    const { id } = await Promise.resolve(params);
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return new NextResponse("Unauthorized", { status: 401 });
    
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const meeting = await prisma.scheduledMeeting.findUnique({
      where: { id },
      include: {
        video: {
          select: { title: true, durationFormatted: true }
        }
      }
    });

    if (!meeting || meeting.userId !== user.id) {
      return new NextResponse("Not Found", { status: 404 });
    }

    // Since execution logs aren't fully migrated to DB yet, we just return the meeting
    return NextResponse.json({
      ...meeting,
      videoTitle: meeting.video?.title || null
    });
  } catch (error) {
    console.error("Error fetching meeting:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// PATCH /api/meetings/[id] - Update meeting status (e.g. Leave Meeting) or save AI summary
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> | { id: string } }) {
  try {
    const { id } = await Promise.resolve(params);
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return new NextResponse("Unauthorized", { status: 401 });

    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const meeting = await prisma.scheduledMeeting.findUnique({ where: { id } });
    if (!meeting || meeting.userId !== user.id) return new NextResponse("Not Found", { status: 404 });

    const body = await request.json();
    const { action, status, summary, mentions, attendeeQuestions, followUpDraft } = body;

    const dataToUpdate: any = {};
    if (status) dataToUpdate.status = status;
    if (summary !== undefined) dataToUpdate.summary = summary;
    if (mentions !== undefined) dataToUpdate.mentions = mentions;
    if (attendeeQuestions !== undefined) dataToUpdate.attendeeQuestions = attendeeQuestions;
    if (followUpDraft !== undefined) dataToUpdate.followUpDraft = followUpDraft;

    // Emergency Leave / Stop Agent action
    if (action === "leave") {
      dataToUpdate.status = "completed";
      // Try to notify the worker to disconnect immediately
      try {
        const workerUrl = process.env.PLAYWRIGHT_WORKER_URL || "http://localhost:8080";
        await fetch(`${workerUrl}/stop/${id}`, {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.WORKER_SECRET || "dev-secret-key"}` },
        }).catch(() => {});
      } catch {}
    }

    const updated = await prisma.scheduledMeeting.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, meeting: updated });
  } catch (error) {
    console.error("Error updating meeting:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> | { id: string } }) {
  try {
    const { id } = await Promise.resolve(params);
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return new NextResponse("Unauthorized", { status: 401 });

    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const meeting = await prisma.scheduledMeeting.findUnique({ where: { id } });
    if (!meeting || meeting.userId !== user.id) return new NextResponse("Not Found", { status: 404 });

    await prisma.scheduledMeeting.delete({ where: { id } });
    return NextResponse.json({ success: true, deleted: id }, { status: 200 });
  } catch (error) {
    console.error("Error deleting meeting:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
