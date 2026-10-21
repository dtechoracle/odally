"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-200">404</h1>
        <p className="text-lg text-slate-600 mt-4">This page could not be found.</p>
        <Link href="/dashboard" className="inline-flex items-center gap-2 mt-6 text-sky-600 hover:text-sky-700">
          Go to Dashboard <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
