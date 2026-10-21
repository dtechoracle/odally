"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, User, Globe, Video as VideoIcon, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DashboardShell } from "@/components/layout/DashboardShell";

const timezones = ["Africa/Lagos", "Africa/Cairo", "Africa/Johannesburg", "America/New_York", "America/Los_Angeles", "Europe/London", "Europe/Paris", "Asia/Tokyo", "Asia/Singapore", "Australia/Sydney"];

const sidebarSettings = [
  { label: "Account", icon: User, id: "account-settings" },
  { label: "Google Session", icon: Globe, id: "google-session" },
  { label: "Default Meeting Settings", icon: VideoIcon, id: "meeting-settings" },
  { label: "Notifications", icon: Bell, id: "notification-settings" },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("Account");

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="h-8"><ArrowLeft className="h-4 w-4" /> Back</Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Sidebar */}
          <div className="space-y-1">
            {sidebarSettings.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveSection(item.label);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  activeSection === item.label ? "bg-sky-50 text-sky-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className="h-4 w-4" /> {item.label}
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card id="account-settings" className="settings-section border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Account</CardTitle><CardDescription>Your profile information.</CardDescription></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center"><span className="text-lg font-bold text-sky-700">D</span></div>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
                <div className="space-y-2"><Label>Name</Label><Input defaultValue="Demo User" /></div>
                <div className="space-y-2"><Label>Email</Label><Input type="email" defaultValue="demo@meetingagent.com" /></div>
                <div className="space-y-2">
                  <Label>Timezone</Label>
                  <Select defaultValue="Africa/Lagos">
                    <SelectTrigger><SelectValue placeholder="Select timezone" /></SelectTrigger>
                    <SelectContent>{timezones.map((tz) => <SelectItem key={tz} value={tz}>{tz}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter><Button className="bg-sky-500 hover:bg-sky-600 shadow-sm shadow-sky-200">Save Changes</Button></CardFooter>
            </Card>

            <Card id="google-session" className="settings-section border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Google Session</CardTitle><CardDescription>Manage your Google account connection.</CardDescription></CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div><p className="text-sm font-medium text-slate-900">Google account</p><p className="text-sm text-slate-500">Connected</p></div>
                  <Badge variant="success">Connected</Badge>
                </div>
                <p className="text-xs text-slate-400 mt-3">We never ask for your Google password. Sessions are encrypted.</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm">Re-authenticate</Button>
                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Disconnect</Button>
              </CardFooter>
            </Card>

            <Card id="meeting-settings" className="settings-section border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Default Meeting Settings</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Default microphone", desc: "Microphone state when joining", value: false },
                  { label: "Default camera", desc: "Camera state when joining", value: false },
                  { label: "Default presentation", desc: "Auto-start presentation", value: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div><p className="text-sm font-medium text-slate-900">{item.label}</p><p className="text-xs text-slate-500">{item.desc}</p></div>
                    <Switch defaultChecked={item.value} />
                  </div>
                ))}
              </CardContent>
              <CardFooter><Button className="bg-sky-500 hover:bg-sky-600 shadow-sm shadow-sky-200">Save Defaults</Button></CardFooter>
            </Card>

            <Card id="notification-settings" className="settings-section border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Notifications</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Meeting starting", desc: "When an Odally agent starts", value: true },
                  { label: "Completion", desc: "When meeting completes", value: true },
                  { label: "Failure", desc: "When meeting fails", value: true },
                  { label: "Reminder", desc: "Before scheduled meeting", value: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div><p className="text-sm font-medium text-slate-900">{item.label}</p><p className="text-xs text-slate-500">{item.desc}</p></div>
                    <Switch defaultChecked={item.value} />
                  </div>
                ))}
              </CardContent>
              <CardFooter><Button className="bg-sky-500 hover:bg-sky-600 shadow-sm shadow-sky-200">Save Preferences</Button></CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
