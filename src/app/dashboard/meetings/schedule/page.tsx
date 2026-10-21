"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Plus, Calendar, Video as VideoIcon, X, ChevronDown, ChevronUp, Check, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { getVideoById, getAllVideos, getGoogleSession, createMeeting, createNotification } from "@/lib/db";
import { format, parseISO, isToday, isTomorrow, isPast } from "date-fns";

const timezones = [
  "Africa/Lagos", "Africa/Cairo", "Africa/Johannesburg",
  "America/New_York", "America/Los_Angeles", "America/Chicago",
  "Europe/London", "Europe/Paris", "Europe/Berlin",
  "Asia/Tokyo", "Asia/Singapore", "Asia/Dubai",
  "Australia/Sydney", "Pacific/Auckland",
];

const presentationModes = [
  { value: "present_video", label: "Present video" },
  { value: "join_only", label: "Join only" },
  { value: "present_after_joining", label: "Present after joining" },
];

const playModes = [
  { value: "once", label: "Play once" },
  { value: "loop", label: "Loop" },
];

const leaveOptions = [
  { value: "video_ends", label: "After video ends" },
  { value: "specified_duration", label: "Specified duration" },
  { value: "manual", label: "Manual" },
  { value: "custom", label: "Custom" },
];

function ScheduleMeetingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dateFromQuery = searchParams.get("date") || "";
  const timeFromQuery = searchParams.get("time") || "";
  
  const [videos, setVideos] = useState<any[]>([]);
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [minDate, setMinDate] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>(dateFromQuery);
  const [selectedTime, setSelectedTime] = useState<string>(timeFromQuery);
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/videos").then(r => r.json()).then(d => setVideos(d.videos || []));
    setMinDate(new Date().toISOString().split("T")[0]);
    if (dateFromQuery) {
      setSelectedDate(dateFromQuery);
    }
    if (timeFromQuery) {
      setSelectedTime(timeFromQuery);
    }
  }, [dateFromQuery, timeFromQuery]);

  const [form, setForm] = useState({
    title: "",
    meetUrl: "",
    timezone: "UTC",
  });

  const [settings, setSettings] = useState({
    cameraEnabled: false,
    microphoneEnabled: false,
    presentationEnabled: true,
    playMode: "once" as const,
    joinBehavior: "immediately" as const,
    presentationMode: "present_video" as const,
    leaveAfterVideo: true,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.title.trim()) newErrors.title = "Meeting name is required";
    if (!form.meetUrl.trim()) {
      newErrors.meetUrl = "Google Meet URL is required";
    }
    if (!selectedDate) newErrors.date = "Date is required";
    if (!selectedTime) newErrors.time = "Time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSchedule = async () => {
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/meetings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          meetUrl: form.meetUrl,
          scheduledAt: new Date(`${selectedDate}T${selectedTime}:00`).toISOString(),
          timezone: form.timezone,
          videoId: selectedVideo || null,
          settings,
        })
      });

      if (!res.ok) throw new Error("Failed to schedule");
      setForm({ title: "", meetUrl: "", timezone: "UTC" });
      setSelectedDate("");
      setSelectedTime("");
      setSelectedVideo("");
      setStep(1);
      router.refresh();
      router.push(`/dashboard`);
    } catch (error) {
      console.error(error);
      alert("Failed to schedule meeting");
      setIsSubmitting(false);
    }
  };

  const steps = [
    { label: "Meeting Info", icon: Calendar },
    { label: "Video", icon: VideoIcon },
    { label: "Review", icon: Check },
  ];

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Schedule Meeting</h1>
          <p className="text-sm text-slate-500 mt-1">Configure your Odally agent details.</p>
        </div>

      {/* Step indicator */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
              step >= i + 1 ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-400"
            )}>
              {step > i + 1 ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
            </div>
            <span className={cn("text-xs font-medium hidden sm:inline", step >= i + 1 ? "text-slate-900" : "text-slate-400")}>
              {s.label}
            </span>
            {i < steps.length - 1 && <div className="w-8 h-px bg-slate-200" />}
          </div>
        ))}
      </div>

      <Card className="border-slate-200/60">
        <CardContent className="pt-6 space-y-6">
          {/* Step 1: Meeting Info */}
          {step === 1 && (
            <div className="space-y-5 animate-slide-up">
              <h2 className="text-lg font-semibold text-slate-900">Meeting Details</h2>

              <div className="space-y-2">
                <Label htmlFor="title">Meeting name</Label>
                <Input
                  id="title"
                  placeholder="Product Demo"
                  value={form.title}
                  onChange={(e) => { setForm({ ...form, title: e.target.value }); setErrors({ ...errors, title: "" }); }}
                  className={errors.title ? "border-red-300 focus:ring-red-500" : ""}
                />
                {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="meetUrl">Google Meet URL</Label>
                <Input
                  id="meetUrl"
                  placeholder="https://meet.google.com/abc-defg-hij"
                  value={form.meetUrl}
                  onChange={(e) => { setForm({ ...form, meetUrl: e.target.value }); setErrors({ ...errors, meetUrl: "" }); }}
                  className={errors.meetUrl ? "border-red-300 focus:ring-red-500" : ""}
                />
                {errors.meetUrl ? (
                  <p className="text-xs text-red-500">{errors.meetUrl}</p>
                ) : (
                  <p className="text-xs text-slate-400">Enter a valid Google Meet link</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => { setSelectedDate(e.target.value); setErrors({ ...errors, date: "" }); }}
                    min={minDate}
                    className={errors.date ? "border-red-300 focus:ring-red-500" : ""}
                  />
                  {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Start time</Label>
                  <Input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => { setSelectedTime(e.target.value); setErrors({ ...errors, time: "" }); }}
                    className={errors.time ? "border-red-300 focus:ring-red-500" : ""}
                  />
                  {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Time zone</Label>
                <Select value={form.timezone} onValueChange={(v) => setForm({ ...form, timezone: v })}>
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-slate-400">Detected: Africa/Lagos</p>
              </div>
            </div>
          )}

          {/* Step 2: Video */}
          {step === 2 && (
            <div className="space-y-5 animate-slide-up">
              <h2 className="text-lg font-semibold text-slate-900">Select Video</h2>

              {videos.length === 0 ? (
                <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg">
                  <VideoIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">No videos available. Upload one first.</p>
                  <Button size="sm" variant="outline" className="mt-3" onClick={() => router.push("/dashboard/videos")}>
                    Go to Videos
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {videos.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setSelectedVideo(video.id)}
                      className={cn(
                        "flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-all hover:border-sky-200",
                        selectedVideo === video.id ? "border-sky-400 bg-sky-50/50" : "border-slate-200"
                      )}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <VideoIcon className="h-5 w-5 text-slate-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">{video.title}</p>
                        <p className="text-xs text-slate-500">{video.durationFormatted} • {video.width}×{video.height} • {video.mimeType}</p>
                      </div>
                      {selectedVideo === video.id && <Check className="h-5 w-5 text-sky-500" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 3: Review + Advanced Options */}
          {step === 3 && (
            <div className="space-y-5 animate-slide-up">
              {/* Advanced Options */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <span>Advanced Options</span>
                  {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {showAdvanced && (
                  <div className="px-4 pb-4 space-y-4 border-t border-slate-100 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-900">Camera</p>
                          <p className="text-xs text-slate-500">Default: OFF</p>
                        </div>
                        <input type="checkbox" checked={settings.cameraEnabled} onChange={(e) => setSettings({ ...settings, cameraEnabled: e.target.checked })} className="h-4 w-4 text-sky-500 rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-900">Microphone</p>
                          <p className="text-xs text-slate-500">Default: OFF</p>
                        </div>
                        <input type="checkbox" checked={settings.microphoneEnabled} onChange={(e) => setSettings({ ...settings, microphoneEnabled: e.target.checked })} className="h-4 w-4 text-sky-500 rounded" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Join behavior</Label>
                      <Select value={settings.joinBehavior} onValueChange={(v) => setSettings({ ...settings, joinBehavior: v as any })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Join immediately</SelectItem>
                          <SelectItem value="wait_host">Wait for host</SelectItem>
                          <SelectItem value="wait_admitted">Wait until admitted</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Presentation mode</Label>
                      <Select value={settings.presentationMode} onValueChange={(v) => setSettings({ ...settings, presentationMode: v as any })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {presentationModes.map((m) => <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Video behavior</Label>
                      <Select value={settings.playMode} onValueChange={(v) => setSettings({ ...settings, playMode: v as any })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {playModes.map((m) => <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Leave meeting after</Label>
                      <Select value={settings.leaveAfterVideo ? "video_ends" : "manual"} onValueChange={(v) => setSettings({ ...settings, leaveAfterVideo: v === "video_ends" })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {leaveOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>

              {/* Review */}
              <h2 className="text-lg font-semibold text-slate-900">Review Meeting</h2>
              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <div className="divide-y divide-slate-100">
                  <div className="flex px-4 py-3">
                    <span className="w-32 text-xs font-medium text-slate-500">Meeting</span>
                    <span className="text-sm text-slate-900">{form.title || "—"}</span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 text-xs font-medium text-slate-500">Date</span>
                    <span className="text-sm text-slate-900">{selectedDate ? format(new Date(`${selectedDate}T00:00:00`), "MMMM d, yyyy") : "—"}</span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 text-xs font-medium text-slate-500">Time</span>
                    <span className="text-sm text-slate-900">{selectedTime || "—"}</span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 text-xs font-medium text-slate-500">Timezone</span>
                    <span className="text-sm text-slate-900">{form.timezone}</span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 text-xs font-medium text-slate-500">Google Meet</span>
                    <span className="text-sm text-sky-600 truncate">{form.meetUrl || "—"}</span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 text-xs font-medium text-slate-500">Video</span>
                    <span className="text-sm text-slate-900">
                      {selectedVideo ? videos.find((v) => v.id === selectedVideo)?.title || "—" : "—"}
                    </span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 text-xs font-medium text-slate-500">Presentation</span>
                    <span className="text-sm text-slate-900">{settings.presentationEnabled ? "Enabled" : "Disabled"}</span>
                  </div>
                </div>
              </div>

              {/* Timezone verification warning */}
              <div className="rounded-lg bg-sky-50 border border-sky-100 p-4">
                <p className="text-sm font-medium text-sky-900">Timezone verification</p>
                <p className="text-xs text-sky-700 mt-1">
                  Your agent will join at {selectedTime || "—"} in {form.timezone}. Please verify this is correct to avoid scheduling conflicts.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4">
            <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
              Back
            </Button>
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)} className="bg-sky-500 hover:bg-sky-600">
                Next
              </Button>
            ) : (
              <Button onClick={handleSchedule} className="bg-sky-500 hover:bg-sky-600">
                Schedule Meeting
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      </div>
    </DashboardShell>
  );
}

export default function ScheduleMeetingPage() {
  return (
    <Suspense fallback={<DashboardShell><div className="min-h-[400px] flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-sky-500" /></div></DashboardShell>}>
      <ScheduleMeetingContent />
    </Suspense>
  );
}
