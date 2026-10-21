"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Activity, Calendar, Users, Video, Settings, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Activity },
  { label: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { label: "Meetings", href: "/dashboard/meetings", icon: Users },
  { label: "Videos", href: "/dashboard/videos", icon: Video },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleNavClick = useCallback((href: string, label: string) => {
    router.push(href);
    setActiveTab(label);
    setMobileOpen(false);
  }, [router]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2" onClick={() => setActiveTab("")}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500">
                <span className="text-sm font-bold text-white">O</span>
              </div>
              <span className="text-lg font-semibold text-slate-900">Odally</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    activeTab === item.label
                      ? "bg-sky-50 text-sky-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <div className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5">
              <div className="h-6 w-6 rounded-full bg-sky-100 flex items-center justify-center">
                <span className="text-xs font-semibold text-sky-700">D</span>
              </div>
              <div className="text-sm">
                <p className="font-medium text-slate-900">Demo User</p>
                <p className="text-xs text-slate-500">demo@meetingagent.com</p>
              </div>
            </div>
            <button
              className="md:hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, item.label)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  activeTab === item.label ? "bg-sky-50 text-sky-700" : "text-slate-600 hover:bg-slate-50"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
