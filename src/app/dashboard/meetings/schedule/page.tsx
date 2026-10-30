"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Calendar,
  Video as VideoIcon,
  FileText,
  Upload,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  MessageSquare,
  AlertCircle,
  X,
  File,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { format } from "date-fns";

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
  { value: "video_ends", label: "After presentation ends" },
  { value: "specified_duration", label: "Specified duration" },
  { value: "manual", label: "Manual" },
];

function ScheduleMeetingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dateFromQuery = searchParams.get("date") || "";
  const timeFromQuery = searchParams.get("time") || "";

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [step, setStep] = useState(1);
  const [minDate, setMinDate] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>(dateFromQuery);
  const [selectedTime, setSelectedTime] = useState<string>(timeFromQuery);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Materials & Instructions fed to the agent
  const [materialType, setMaterialType] = useState<"document" | "video" | "notes" | "none">("document");
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [uploadedDoc, setUploadedDoc] = useState<{ filename: string; url: string; size: number } | null>(null);
  const [isUploadingDoc, setIsUploadingDoc] = useState(false);
  const [talkingPoints, setTalkingPoints] = useState<string>("");
  const [introMessage, setIntroMessage] = useState<string>(
    "Hi everyone! I'm Odally attending on behalf of the presenter. I'll be sharing their material and taking notes for them today."
  );
  const [keywordAlerts, setKeywordAlerts] = useState<string>("");

  const [form, setForm] = useState({
    title: "",
    meetUrl: "",
    timezone: "UTC",
  });

  const [settings, setSettings] = useState({
    cameraEnabled: false,
    microphoneEnabled: true,
    presentationEnabled: true,
    playMode: "once" as const,
    joinBehavior: "immediately" as const,
    presentationMode: "present_video" as const,
    leaveAfterVideo: true,
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/videos")
      .then((r) => (r.ok ? r.json() : { videos: [] }))
      .then((d) => setVideos(d.videos || []))
      .catch(() => {});
    setMinDate(new Date().toISOString().split("T")[0]);
    if (dateFromQuery) setSelectedDate(dateFromQuery);
    if (timeFromQuery) setSelectedTime(timeFromQuery);
  }, [dateFromQuery, timeFromQuery]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingDoc(true);
    try {
      const res = await fetch(
        `/api/documents/upload?filename=${encodeURIComponent(file.name)}&mimeType=${encodeURIComponent(file.type)}`,
        {
          method: "POST",
          body: file,
        }
      );
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setUploadedDoc({
        filename: data.document.filename,
        url: data.document.url,
        size: data.document.size,
      });
      if (data.document.extractedText) {
        setTalkingPoints((prev) => {
          if (prev && prev.trim() && prev !== "Explain the file") {
            return `${prev}\n\n[Document Material (${data.document.filename})]:\n${data.document.extractedText.slice(0, 3000)}`;
          }
          return `Document Material (${data.document.filename}):\n${data.document.extractedText.slice(0, 3000)}`;
        });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to upload document");
    } finally {
      setIsUploadingDoc(false);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.title.trim()) newErrors.title = "Meeting name is required";
    if (!form.meetUrl.trim()) newErrors.meetUrl = "Google Meet URL is required";
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
          videoId: materialType === "video" ? selectedVideo || null : null,
          materialType,
          documentUrl: uploadedDoc?.url || null,
          documentName: uploadedDoc?.filename || null,
          talkingPoints: talkingPoints.trim() || null,
          introMessage: introMessage.trim() || null,
          keywordAlerts: keywordAlerts.trim() || null,
          settings,
        }),
      });

      if (!res.ok) throw new Error("Failed to schedule");
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
    { label: "Feed Material", icon: FileText },
    { label: "Review", icon: Check },
  ];

  return (
    <DashboardShell>
      <div className="space-y-6 max-w-3xl mx-auto pb-16">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Schedule Meeting</h1>
          <p className="text-sm text-slate-500 mt-1">Configure your Odally agent details and meeting materials.</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all",
                  step >= i + 1 ? "bg-sky-500 text-white shadow-xs" : "bg-slate-100 text-slate-400"
                )}
              >
                {step > i + 1 ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
              </div>
              <span className={cn("text-xs font-semibold hidden sm:inline", step >= i + 1 ? "text-slate-900" : "text-slate-400")}>
                {s.label}
              </span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-slate-200" />}
            </div>
          ))}
        </div>

        <Card className="border-slate-200/80 shadow-sm rounded-2xl overflow-hidden bg-white">
          <CardContent className="p-6 sm:p-8 space-y-6">
            
            {/* STEP 1: MEETING DETAILS & ANNOUNCEMENTS */}
            {step === 1 && (
              <div className="space-y-5 animate-slide-up">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Meeting Details</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Where and when should your agent attend?</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-xs font-semibold text-slate-700">Meeting name</Label>
                  <Input
                    id="title"
                    placeholder="Product Demo, Sprint Sync, Client Pitch..."
                    value={form.title}
                    onChange={(e) => {
                      setForm({ ...form, title: e.target.value });
                      setErrors({ ...errors, title: "" });
                    }}
                    className={cn("h-10", errors.title && "border-red-300 focus:ring-red-500")}
                  />
                  {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meetUrl" className="text-xs font-semibold text-slate-700">Google Meet URL</Label>
                  <Input
                    id="meetUrl"
                    placeholder="https://meet.google.com/abc-defg-hij"
                    value={form.meetUrl}
                    onChange={(e) => {
                      setForm({ ...form, meetUrl: e.target.value });
                      setErrors({ ...errors, meetUrl: "" });
                    }}
                    className={cn("h-10", errors.meetUrl && "border-red-300 focus:ring-red-500")}
                  />
                  {errors.meetUrl ? (
                    <p className="text-xs text-red-500">{errors.meetUrl}</p>
                  ) : (
                    <p className="text-xs text-slate-400">Enter a valid Google Meet link</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-slate-700">Date</Label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setErrors({ ...errors, date: "" });
                      }}
                      min={minDate}
                      className={cn("h-10", errors.date && "border-red-300 focus:ring-red-500")}
                    />
                    {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold text-slate-700">Start time</Label>
                    <Input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => {
                        setSelectedTime(e.target.value);
                        setErrors({ ...errors, time: "" });
                      }}
                      className={cn("h-10", errors.time && "border-red-300 focus:ring-red-500")}
                    />
                    {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-xs font-semibold text-slate-700">Time zone</Label>
                  <Select value={form.timezone} onValueChange={(v) => setForm({ ...form, timezone: v })}>
                    <SelectTrigger id="timezone" className="h-10">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Announcement & Name Watcher Box */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <Label htmlFor="introMessage" className="text-xs font-semibold text-slate-700">
                        Polite Greeting Spoken by Agent
                      </Label>
                      <Sparkles className="h-3.5 w-3.5 text-sky-500" />
                    </div>
                    <Input
                      id="introMessage"
                      value={introMessage}
                      onChange={(e) => setIntroMessage(e.target.value)}
                      placeholder="Hi everyone! I'm Odally here on behalf of..."
                      className="h-10 text-xs text-slate-800"
                    />
                    <p className="text-[11px] text-slate-400">
                      The agent greets the call upon joining so attendees know you sent a surrogate.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="keywordAlerts" className="text-xs font-semibold text-slate-700">
                      Watch for Mentions of Your Name
                    </Label>
                    <Input
                      id="keywordAlerts"
                      value={keywordAlerts}
                      onChange={(e) => setKeywordAlerts(e.target.value)}
                      placeholder="e.g. Ezekiel, Marketing Budget, Project Launch"
                      className="h-10 text-xs text-slate-800"
                    />
                    <p className="text-[11px] text-slate-400">
                      You'll get an instant alert if anyone in the room asks about you or these topics.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: FEED MATERIALS & INSTRUCTIONS TO THE AGENT */}
            {step === 2 && (
              <div className="space-y-6 animate-slide-up">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Feed Materials to the Agent</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    What documents, presentation, or talking points should the agent use?
                  </p>
                </div>

                {/* Material Mode Selector Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => setMaterialType("document")}
                    className={cn(
                      "py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                      materialType === "document"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    <FileText className="h-3.5 w-3.5 text-sky-500" />
                    <span>Document & Notes</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMaterialType("video")}
                    className={cn(
                      "py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                      materialType === "video"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    <VideoIcon className="h-3.5 w-3.5 text-sky-500" />
                    <span>Video Pitch</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMaterialType("none")}
                    className={cn(
                      "py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                      materialType === "none"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-slate-500" />
                    <span>Silent Attendee</span>
                  </button>
                </div>

                {/* TAB 1: DOCUMENT & TALKING POINTS */}
                {materialType === "document" && (
                  <div className="space-y-4">
                    {/* Document Upload Area */}
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-slate-700">Attach Document / Deck</Label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".pdf,.docx,.doc,.txt,.md,.pptx"
                        className="hidden"
                      />

                      {uploadedDoc ? (
                        <div className="flex items-center justify-between p-3.5 rounded-xl border border-sky-300 bg-sky-50/50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 font-bold">
                              <File className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-900">{uploadedDoc.filename}</p>
                              <p className="text-[11px] text-slate-500">{(uploadedDoc.size / 1024).toFixed(1)} KB • Ready for Agent</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setUploadedDoc(null)}
                            className="h-8 text-xs text-red-500 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-slate-200 hover:border-sky-400 rounded-xl p-6 text-center cursor-pointer transition-all bg-slate-50/50 hover:bg-sky-50/20"
                        >
                          <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                          <p className="text-xs font-semibold text-slate-800">
                            {isUploadingDoc ? "Uploading document..." : "Click to upload a document for your agent"}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">Supports PDF, DOCX, TXT, PPTX (up to 25MB)</p>
                        </div>
                      )}
                    </div>

                    {/* Talking Points & Instructions */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="talkingPoints" className="text-xs font-semibold text-slate-700">
                          Talking Points & Agenda Instructions
                        </Label>
                        <span className="text-[11px] text-slate-400">Fed directly to the AI</span>
                      </div>
                      <Textarea
                        id="talkingPoints"
                        rows={4}
                        placeholder="e.g. Present the Q3 revenue update, explain that we're opening hiring next month, and tell Sarah that the design files are ready."
                        value={talkingPoints}
                        onChange={(e) => setTalkingPoints(e.target.value)}
                        className="text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: VIDEO PRESENTATION */}
                {materialType === "video" && (
                  <div className="space-y-3">
                    <Label className="text-xs font-semibold text-slate-700">Select Presentation Video</Label>
                    {videos.length === 0 ? (
                      <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                        <VideoIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-xs text-slate-500">No videos available in your library.</p>
                        <Button size="sm" variant="outline" className="mt-3 text-xs" onClick={() => router.push("/dashboard/videos")}>
                          Go to Videos Upload
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2.5 max-h-[260px] overflow-y-auto pr-1">
                        {videos.map((video) => (
                          <button
                            key={video.id}
                            type="button"
                            onClick={() => setSelectedVideo(video.id)}
                            className={cn(
                              "flex w-full items-center gap-3.5 rounded-xl border p-3.5 text-left transition-all",
                              selectedVideo === video.id ? "border-sky-500 bg-sky-50/50 shadow-2xs" : "border-slate-200 hover:border-slate-300 bg-white"
                            )}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 font-bold text-xs">
                              MP4
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-slate-900 truncate">{video.title}</p>
                              <p className="text-[11px] text-slate-500">{video.durationFormatted} • 1080p</p>
                            </div>
                            {selectedVideo === video.id && <Check className="h-4 w-4 text-sky-600 shrink-0" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: SILENT ATTENDEE */}
                {materialType === "none" && (
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center space-y-2">
                    <p className="text-xs font-bold text-slate-800">Silent Attendance Mode</p>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Your agent will join without playing media, speak the polite greeting, take meeting notes, and alert you if your name or keywords are called.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: REVIEW & CONFIRM */}
            {step === 3 && (
              <div className="space-y-5 animate-slide-up">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Review Meeting Brief</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Confirm the instructions fed to your agent.</p>
                </div>

                <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 bg-slate-50/40 text-xs">
                  <div className="flex px-4 py-3">
                    <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Meeting</span>
                    <span className="font-semibold text-slate-900">{form.title}</span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Date & Time</span>
                    <span className="font-semibold text-slate-900">
                      {selectedDate} at {selectedTime} ({form.timezone})
                    </span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Google Meet</span>
                    <span className="text-sky-600 truncate">{form.meetUrl}</span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Material Mode</span>
                    <span className="font-semibold text-slate-900 capitalize">{materialType}</span>
                  </div>
                  {uploadedDoc && (
                    <div className="flex px-4 py-3">
                      <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Attached Doc</span>
                      <span className="font-semibold text-slate-900">{uploadedDoc.filename}</span>
                    </div>
                  )}
                  {selectedVideo && (
                    <div className="flex px-4 py-3">
                      <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Video</span>
                      <span className="font-semibold text-slate-900">
                        {videos.find((v) => v.id === selectedVideo)?.title || "Selected video"}
                      </span>
                    </div>
                  )}
                  {talkingPoints && (
                    <div className="flex px-4 py-3">
                      <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Talking Points</span>
                      <span className="text-slate-800 line-clamp-2">{talkingPoints}</span>
                    </div>
                  )}
                  <div className="flex px-4 py-3">
                    <span className="w-32 font-semibold text-slate-500 uppercase tracking-wider">Announcement</span>
                    <span className="text-slate-800 italic line-clamp-2">"{introMessage}"</span>
                  </div>
                </div>

                <div className="rounded-xl bg-sky-50 border border-sky-200/80 p-4">
                  <p className="text-xs font-semibold text-sky-900">Live Agent Stand-in</p>
                  <p className="text-[11px] text-sky-700 mt-1 leading-relaxed">
                    At the scheduled time, your agent will enter Google Meet, speak the polite introduction, present your material, track discussions, and email you the summary upon completion.
                  </p>
                </div>
              </div>
            )}

            {/* Step Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              {step > 1 ? (
                <Button variant="outline" size="sm" onClick={() => setStep(step - 1)} className="h-9 px-4 text-xs font-semibold">
                  Back
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  size="sm"
                  onClick={() => {
                    if (step === 1 && !validate()) return;
                    setStep(step + 1);
                  }}
                  className="h-9 px-6 text-xs font-semibold bg-black hover:bg-slate-800 text-white"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={handleSchedule}
                  disabled={isSubmitting}
                  className="h-9 px-6 text-xs font-semibold bg-[#38c6ec] hover:bg-[#2db5da] text-slate-950 font-bold"
                >
                  {isSubmitting ? "Scheduling Agent..." : "Confirm & Schedule Agent"}
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
    <Suspense fallback={<DashboardShell><div className="flex items-center justify-center min-h-[40vh]"><p className="text-sm text-slate-500">Loading scheduler...</p></div></DashboardShell>}>
      <ScheduleMeetingContent />
    </Suspense>
  );
}
