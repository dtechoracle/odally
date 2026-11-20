import { prisma } from "@/lib/prisma";

/**
 * Retrieve the user's stored Google OAuth tokens from the database.
 * These are saved by NextAuth when the user signs in with Google.
 */
export async function getGoogleTokensForUser(userId: string) {
  const account = await prisma.account.findFirst({
    where: { userId, provider: "google" },
    select: {
      access_token:  true,
      refresh_token: true,
      expires_at:    true,
    },
  });

  if (!account?.refresh_token) {
    throw new Error(
      `No Google account linked for user ${userId}. ` +
      `User must sign in with Google OAuth to allow the agent to join meetings on their behalf.`
    );
  }

  return account;
}

/**
 * Use the Google refresh token to get a fresh access token.
 * Called by the Playwright bot before joining a meeting.
 */
export async function refreshGoogleAccessToken(refreshToken: string): Promise<string> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id:     process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: refreshToken,
      grant_type:    "refresh_token",
    }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(`Token refresh failed: ${data.error_description}`);

  // Also persist the new access token in the database
  return data.access_token as string;
}

/**
 * Fetch upcoming events from the user's primary Google Calendar.
 * Automatically refreshes the OAuth access token if expired.
 */
export async function fetchGoogleCalendarEvents(userId: string) {
  const account = await prisma.account.findFirst({
    where: { userId, provider: "google" },
  });

  if (!account || !account.refresh_token) {
    throw new Error("No connected Google account found for this user.");
  }

  let accessToken = account.access_token;
  const nowInSec = Math.floor(Date.now() / 1000);

  // If token is expired or expiring in the next 2 minutes, refresh it
  if (!accessToken || !account.expires_at || account.expires_at < nowInSec + 120) {
    accessToken = await refreshGoogleAccessToken(account.refresh_token);
    const newExpiresAt = Math.floor(Date.now() / 1000) + 3500;
    await prisma.account.update({
      where: { id: account.id },
      data: { access_token: accessToken, expires_at: newExpiresAt },
    });
  }

  // Query Google Calendar API for upcoming events from now onwards
  const timeMin = new Date().toISOString();
  const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(
    timeMin
  )}&singleEvents=true&orderBy=startTime&maxResults=25`;

  const res = await fetch(calendarUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Google Calendar API error (${res.status}): ${errorText}`);
  }

  const data = await res.json();
  const rawEvents = data.items || [];

  return rawEvents.map((evt: any) => {
    // Extract Google Meet link from hangoutLink, conferenceData, or description
    let meetUrl: string | null = evt.hangoutLink || null;
    if (!meetUrl && evt.conferenceData?.entryPoints) {
      const videoEntry = evt.conferenceData.entryPoints.find(
        (ep: any) => ep.entryPointType === "video"
      );
      if (videoEntry?.uri) meetUrl = videoEntry.uri;
    }
    if (!meetUrl && evt.description) {
      const match = evt.description.match(/https:\/\/meet\.google\.com\/[a-z0-9-]+/i);
      if (match) meetUrl = match[0];
    }

    const scheduledAt = evt.start?.dateTime || evt.start?.date || new Date().toISOString();
    const endAt = evt.end?.dateTime || evt.end?.date || null;

    return {
      id: evt.id,
      title: evt.summary || "Untitled Meeting",
      description: evt.description || null,
      scheduledAt,
      endAt,
      meetUrl,
      hasMeetLink: !!meetUrl,
      attendees: (evt.attendees || []).map((a: any) => a.displayName || a.email).filter(Boolean),
      htmlLink: evt.htmlLink || null,
    };
  });
}
