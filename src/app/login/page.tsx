"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName]   = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      name,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      setError("Could not sign in. Please try again.");
      setLoading(false);
    }
  };

  const googleEnabled =
    typeof window !== "undefined" &&
    (window as any).__NEXT_DATA__?.props?.pageProps?.googleEnabled;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div style={{ width: "100%", maxWidth: 400, padding: "0 24px" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}>
          <svg width="26" height="25" viewBox="0 0 26 25" aria-label="Odally">
            <rect x=".5" y=".5" width="25" height="24" rx="7" fill="#38c6ec" />
            <ellipse cx="13" cy="12.5" rx="5.5" ry="6" stroke="white" strokeWidth="2.2" fill="none" />
          </svg>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em" }}>Odally</span>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 400, letterSpacing: "-0.05em", lineHeight: 1.1, marginBottom: 8 }}>
          Welcome back
        </h1>
        <p style={{ fontSize: 15, color: "#b8b8b8", letterSpacing: "-0.03em", marginBottom: 36 }}>
          Sign in with your Google account to let the agent join meetings on your behalf.
        </p>

        {error && (
          <div style={{ marginBottom: 20, padding: "12px", background: "#fef2f2", color: "#991b1b", borderRadius: "8px", fontSize: "14px" }}>
            {error}
          </div>
        )}

        <button
          onClick={async () => {
            try {
              setLoading(true);
              setError("");
              console.log("Initiating Google sign in...");
              const res = await signIn("google", { callbackUrl: "/dashboard" });
              if (res?.error) {
                console.error("Sign in failed:", res.error);
                setError(`Login failed: ${res.error}`);
                setLoading(false);
              }
            } catch (err: any) {
              console.error("Sign in error:", err);
              setError(err?.message || "Could not connect to authentication service.");
              setLoading(false);
            }
          }}
          disabled={loading}
          style={{
            width: "100%",
            height: 48,
            background: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: 24,
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "inherit",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            color: "#000",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            transition: "background 0.2s ease"
          }}
        >
          {loading ? "Redirecting to Google..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
}
