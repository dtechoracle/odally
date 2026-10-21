"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default function DashboardRoot() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);
  return (
    <DashboardShell>
      <div className="flex items-center justify-center min-h-[40vh]">
        <p className="text-sm text-slate-500">Loading dashboard...</p>
      </div>
    </DashboardShell>
  );
}
