import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },

  providers: [
    // ─── GOOGLE OAUTH ─────────────────────────────────────────────
    // This captures the user's refresh token so the bot can join
    // Google Meet as the authenticated user.
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
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

