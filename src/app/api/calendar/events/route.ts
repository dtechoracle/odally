import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { fetchGoogleCalendarEvents } from "@/lib/googleAuth";

export async function GET() {
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

    const events = await fetchGoogleCalendarEvents(user.id);

    return NextResponse.json({
      success: true,
      events,
      count: events.length,
      meetEventsCount: events.filter((e: any) => e.hasMeetLink).length,
    });
  } catch (error: any) {
    console.error("[Google Calendar API] Error fetching events:", error);
    return NextResponse.json(
      {
        error: error?.message || "Failed to fetch Google Calendar events",
        needsAuth: error?.message?.includes("No connected Google account"),
      },
      { status: 500 }
    );
  }
}
