"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, Calendar, Video, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { cn } from "@/lib/utils";

const quickLinks = [
  { label: "Schedule Meeting", href: "/dashboard/meetings/schedule", icon: Calendar, description: "Create a new meeting agent task" },
  { label: "View Meetings", href: "/dashboard/meetings", icon: Video, description: "Manage all scheduled meetings" },
  { label: "Upload Videos", href: "/dashboard/videos", icon: Video, description: "Manage presentation videos" },
  { label: "Settings", href: "/dashboard/settings", icon: Settings, description: "Configure your account" },
];

export default function NotFound() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            <LayoutDashboard className="h-12 w-12 text-sky-500" />
          </div>
          <h1 className="text-6xl font-bold text-slate-200">404</h1>
          <p className="text-lg text-slate-600 mt-4">This page could not be found.</p>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
          <Link href="/dashboard">
            <Button className="mt-6 bg-sky-500 hover:bg-sky-600 shadow-sm shadow-sky-200">
              Go to Dashboard <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-lg mx-auto">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className={cn("hover:border-sky-200 hover:shadow-sm transition-all text-left cursor-pointer", link.href === "/dashboard" && "border-sky-200")}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50">
                        <link.icon className="h-4 w-4 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{link.label}</p>
                        <p className="text-xs text-slate-500">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
