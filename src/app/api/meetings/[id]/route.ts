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
