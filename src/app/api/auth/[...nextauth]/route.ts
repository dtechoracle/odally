import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const isProductionHttps =
  process.env.NODE_ENV === "production" &&
  !process.env.NEXTAUTH_URL?.includes("localhost") &&
  process.env.NEXTAUTH_URL?.startsWith("https://");

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  useSecureCookies: isProductionHttps,

  providers: [
    // ─── GOOGLE OAUTH ─────────────────────────────────────────────
    // This captures the user's refresh token so the bot can join
    // Google Meet as the authenticated user and sync calendar events.
    GoogleProvider({
      clientId:     process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          // "offline" = get refresh token, "consent" = always prompt to ensure we get it
          access_type: "offline",
          prompt: "consent",
          scope: [
            "openid",
            "email",
            "profile",
            // Calendar scope — needed to read the user's upcoming meetings
            "https://www.googleapis.com/auth/calendar.readonly",
          ].join(" "),
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) token.id = user.id;

      // When Google signs in, persist the tokens into the JWT
      if (account?.provider === "google") {
        token.accessToken  = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt    = account.expires_at;

        // Ensure database Account record has the fresh tokens
        const resolvedUserId = (user?.id || token.id) as string;
        if (resolvedUserId && account.providerAccountId) {
          try {
            await prisma.account.upsert({
              where: {
                provider_providerAccountId: {
                  provider: "google",
                  providerAccountId: account.providerAccountId,
                },
              },
              create: {
                userId: resolvedUserId,
                type: account.type || "oauth",
                provider: "google",
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
              },
              update: {
                access_token: account.access_token,
                ...(account.refresh_token ? { refresh_token: account.refresh_token } : {}),
                expires_at: account.expires_at,
                scope: account.scope,
                id_token: account.id_token,
              },
            });
            console.log("[NextAuth] Persisted fresh Google OAuth tokens for user:", resolvedUserId);
          } catch (e) {
            console.error("[NextAuth] Failed to sync account tokens to DB:", e);
          }
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id           = token.id as string;
        (session.user as any).accessToken  = token.accessToken;
        (session.user as any).refreshToken = token.refreshToken;
      }
      return session;
    },
  },

  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


