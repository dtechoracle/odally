import { NextResponse, connection } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  await connection();
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch execution events tied to this user's meetings
    const events = await prisma.executionEvent.findMany({
      where: {
        log: {
          meeting: {
            userId: user.id,
          },
        },
      },
      include: {
        log: {
          include: {
            meeting: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
      orderBy: {
        timestamp: "desc",
      },
      take: 100,
    });

    const formattedEvents = events.map((e) => ({
      id: e.id,
      meetingId: e.log.meeting.id,
      meetingTitle: e.log.meeting.title,
      timestamp: e.timestamp.toISOString(),
      event: e.event,
      details: e.details,
      type: e.type,
    }));

    return NextResponse.json({ events: formattedEvents });
  } catch (error) {
    console.error("Error fetching activity:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
