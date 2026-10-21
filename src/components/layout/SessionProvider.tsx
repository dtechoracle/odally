"use client";

import React, { createContext, useContext } from "react";
import { SessionProvider as NextAuthSessionProvider, useSession } from "next-auth/react";

interface SessionContextType {
  user: {
    id: string;
    name: string;
    email: string;
    timezone: string;
  } | null;
  isAuthenticated: boolean;
  status: "loading" | "authenticated" | "unauthenticated";
}

export const SessionContext = createContext<SessionContextType>({
  user: null,
  isAuthenticated: false,
  status: "loading",
});

export function useAppSession() {
  return useContext(SessionContext);
}

function SessionContextAdapter({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const contextValue: SessionContextType = React.useMemo(() => ({
    user: session?.user ? {
      id: (session.user as any).id || "",
      name: session.user.name || "User",
      email: session.user.email || "",
      timezone: "UTC",
    } : null,
    isAuthenticated: status === "authenticated",
    status,
  }), [session?.user, status]);

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider>
      <SessionContextAdapter>
        {children}
      </SessionContextAdapter>
    </NextAuthSessionProvider>
  );
}
