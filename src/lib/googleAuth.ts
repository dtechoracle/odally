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
