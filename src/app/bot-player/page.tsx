"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

function BotPlayerContent() {
  const params = useSearchParams();
  const videoUrl = params.get("videoUrl") || "";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play as soon as the page loads
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  if (!videoUrl) {
    return (
      <div style={{ background: "#000", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#fff", fontFamily: "sans-serif" }}>No video specified.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#000",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        autoPlay
        playsInline
        controls={false}
      />
    </div>
  );
}

export default function BotPlayerPage() {
  return (
    <Suspense fallback={<div style={{ background: "#000", minHeight: "100vh" }} />}>
      <BotPlayerContent />
    </Suspense>
  );
}
