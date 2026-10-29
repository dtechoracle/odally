"use client";

import { unstable_noStore as noStore } from "next/cache";
noStore();

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Video as VideoIcon,
  FileText,
  Sparkles,
  AlertTriangle,
  MessageSquare,
  Copy,
  Check,
  LogOut,
  HelpCircle,
  ExternalLink,
  Clock,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { getExecutionLog } from "@/lib/db";
import { formatDate, formatTime } from "@/lib/utils";

const statusLabels: Record<string, string> = {
  scheduled: "Scheduled",
  starting_soon: "Starting soon",
  launching: "Preparing",
  joining: "Joining",
  in_meeting: "In meeting",
  presenting: "Presenting",
  playing: "Presenting",
  monitoring: "Monitoring",
  completed: "Completed",
  failed: "Failed",
  cancelled: "Cancelled",
  running: "Running",
};

function MeetingDetailContent() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [meeting, setMeeting] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [generatingSummary, setGeneratingSummary] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const fetchMeeting = () => {
    if (!params?.id) return;
    fetch(`/api/meetings/${params.id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setMeeting(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMeeting();
  }, [params?.id]);

  const handleGenerateSummary = async () => {
    if (!meeting?.id) return;
    setGeneratingSummary(true);
    try {
      const res = await fetch(`/api/meetings/${meeting.id}/generate-summary`, {
        method: "POST",
      });
      if (res.ok) {
        fetchMeeting();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setGeneratingSummary(false);
    }
  };

  const handleLeaveMeeting = async () => {
    if (!meeting?.id) return;
    if (!confirm("Are you sure you want to pull the agent out of the meeting now?")) return;
    setIsLeaving(true);
    try {
      const res = await fetch(`/api/meetings/${meeting.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "leave" }),
      });
      if (res.ok) {
        // Auto-generate summary upon leaving
        await handleGenerateSummary();
        fetchMeeting();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLeaving(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  if (loading) {
    return (
      <DashboardShell>
        <div className="flex items-center justify-center min-h-[40vh]">
          <p className="text-sm text-slate-500">Loading meeting details...</p>
        </div>
      </DashboardShell>
    );
  }

  if (!meeting) {
    return (
      <DashboardShell>
        <div className="detail-empty text-center py-12">
          <h1 className="text-xl font-bold text-slate-900">Meeting not found</h1>
          <p className="text-sm text-slate-500 mt-1">This meeting may have been removed.</p>
          <Link href="/dashboard/meetings" className="mt-4 inline-block">
            <Button size="sm">Back to meetings</Button>
          </Link>
        </div>
      </DashboardShell>
    );
  }

  const execution = getExecutionLog(meeting.id);
  const timeline = execution?.events ?? [];
  const active = ["scheduled", "starting_soon", "launching", "joining", "running", "presenting", "in_meeting"].includes(
    meeting.status
  );
  const isLive = ["running", "joining", "launching", "presenting", "in_meeting"].includes(meeting.status);
  const status = statusLabels[meeting.status] || meeting.status;

  // Parse AI Intelligence fields if present
  let parsedSummary: { bullets?: string[]; actionItems?: string[] } | null = null;
  if (meeting.summary) {
    try {
      parsedSummary = JSON.parse(meeting.summary);
    } catch {
      parsedSummary = { bullets: [meeting.summary] };
    }
  }

  let parsedMentions: Array<{ keyword: string; timestamp: string; context: string }> = [];
  if (meeting.mentions) {
    try {
      parsedMentions = JSON.parse(meeting.mentions);
    } catch {}
  }

  let parsedQuestions: Array<{ id: string; author: string; question: string; timestamp: string }> = [];
  if (meeting.attendeeQuestions) {
    try {
      parsedQuestions = JSON.parse(meeting.attendeeQuestions);
    } catch {}
  }

  return (
    <DashboardShell>
      <div className="meeting-detail-page space-y-6 max-w-6xl mx-auto pb-12">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <Link href="/dashboard/meetings">
              <Button variant="ghost" size="sm" className="h-9 px-2.5">
                <ArrowLeft className="h-4 w-4 mr-1" /> Meetings
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{meeting.title}</h1>
              <p className="text-xs text-slate-500 mt-0.5">
                {formatDate(meeting.scheduledAt)} <span>·</span> {formatTime(meeting.scheduledAt)} ({meeting.timezone})
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            {isLive && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleLeaveMeeting}
                disabled={isLeaving}
                className="h-9 gap-1.5 shadow-sm"
              >
                <LogOut className="h-3.5 w-3.5" />
                {isLeaving ? "Disconnecting..." : "Disconnect Agent (Leave)"}
              </Button>
            )}
            <Badge
              className={
                meeting.status === "failed"
                  ? "bg-red-50 text-red-700 border-red-200"
                  : meeting.status === "completed"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-sky-50 text-sky-700 border-sky-200"
              }
            >
              <span className="app-status-dot mr-1" />
              {status}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. POST-MEETING AI SUMMARY & ACTION ITEMS */}
            {(meeting.status === "completed" || meeting.summary) && (
              <Card className="border-sky-200 bg-gradient-to-b from-sky-50/40 to-white shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-base text-slate-900">Post-Meeting AI Summary</CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleGenerateSummary}
                      disabled={generatingSummary}
                      className="text-xs text-sky-600 hover:text-sky-700 h-8"
                    >
                      {generatingSummary ? "Refreshing..." : "Re-generate"}
                    </Button>
                  </div>
                  <CardDescription className="text-xs">
                    Generated recap of what happened while the agent attended for you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {parsedSummary ? (
                    <>
                      {/* Bullets */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Executive Recap</p>
                        <ul className="space-y-1.5 text-sm text-slate-800 list-disc list-inside">
                          {parsedSummary.bullets?.map((b, i) => (
                            <li key={i} className="leading-relaxed">{b}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Action items */}
                      {parsedSummary.actionItems && parsedSummary.actionItems.length > 0 && (
                        <div className="pt-2 border-t border-sky-100">
                          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            Next Steps & Action Items
                          </p>
                          <div className="space-y-1.5">
                            {parsedSummary.actionItems.map((act, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-slate-800">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center shrink-0 mt-0.5">
                                  ✓
                                </span>
                                <span>{act}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="py-4 text-center">
                      <p className="text-sm text-slate-500 mb-3">No summary generated yet for this session.</p>
                      <Button size="sm" onClick={handleGenerateSummary} disabled={generatingSummary} className="bg-sky-500 hover:bg-sky-600">
                        <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                        Generate AI Summary Now
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* 2. "DID THEY MENTION MY NAME?" ALERTS */}
            {parsedMentions.length > 0 && (
              <Card className="border-amber-200 bg-amber-50/40 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-slate-900">Name & Keyword Alerts</CardTitle>
                      <CardDescription className="text-xs">
                        Times you or your project were brought up during the call.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2.5">
                  {parsedMentions.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border border-amber-200/80 shadow-2xs flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                            {m.keyword}
                          </span>
                          <span className="text-xs text-slate-400">at {m.timestamp}</span>
                        </div>
                        <p className="text-sm text-slate-800 italic">{m.context}</p>
                      </div>
                      <Badge variant="outline" className="text-[11px] text-amber-700 border-amber-300 shrink-0">
                        Attention
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* 3. QUESTIONS ASKED BY ATTENDEES */}
            {parsedQuestions.length > 0 && (
              <Card className="border-slate-200/80 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <CardTitle className="text-base text-slate-900">Questions from Attendees</CardTitle>
                      <CardDescription className="text-xs">
                        Captured from the Google Meet chat during the presentation.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2.5">
                  {parsedQuestions.map((q) => (
                    <div key={q.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <HelpCircle className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{q.author}</span>
                          <span className="text-[11px] text-slate-400">{q.timestamp}</span>
                        </div>
                        <p className="text-sm text-slate-800 mt-0.5">{q.question}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* 4. READY-TO-SEND FOLLOW-UP EMAIL DRAFT */}
            {meeting.followUpDraft && (
              <Card className="border-slate-200/80 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                        <Send className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-base text-slate-900">One-Click Follow-Up Email</CardTitle>
                        <CardDescription className="text-xs">
                          Pre-written draft ready to send to meeting participants.
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(meeting.followUpDraft)}
                      className="h-8 gap-1.5 text-xs font-semibold"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copy Draft
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 whitespace-pre-wrap font-sans leading-relaxed">
                    {meeting.followUpDraft}
                  </pre>
                </CardContent>
              </Card>
            )}

            {/* 5. MEETING MATERIALS (What was fed to the AI) */}
            <Card className="border-slate-200/80 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-slate-900">Agent Brief & Materials Fed</CardTitle>
                <CardDescription className="text-xs">The presentation, document, or instructions given to the agent.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Intro announcement */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Polite Announcement Spoken Upon Joining
                  </p>
                  <p className="text-xs text-slate-800 italic">
                    "{meeting.introMessage || `Hi everyone! I'm Odally here on behalf of the presenter. I'll be sharing their material and taking notes for them today.`}"
                  </p>
                </div>

                {/* Document or Notes */}
                {meeting.documentName && (
                  <div className="flex items-center justify-between p-3.5 rounded-xl border border-sky-200 bg-sky-50/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{meeting.documentName}</p>
                        <p className="text-xs text-slate-500">Document fed to the agent</p>
                      </div>
                    </div>
                    {meeting.documentUrl && (
                      <a href={meeting.documentUrl} target="_blank" rel="noreferrer">
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          <ExternalLink className="h-3.5 w-3.5 mr-1" /> View File
                        </Button>
                      </a>
                    )}
                  </div>
                )}

                {/* Talking Points */}
                {meeting.talkingPoints && (
                  <div className="p-3.5 rounded-xl border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Talking Points & Instructions
                    </p>
                    <p className="text-xs text-slate-700 whitespace-pre-wrap">{meeting.talkingPoints}</p>
                  </div>
                )}

                {/* Video Presentation */}
                {meeting.videoId && (
                  <div className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-200">
                    <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                      <VideoIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{meeting.video?.title || meeting.videoTitle || "Video Presentation"}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{meeting.video?.durationFormatted || meeting.videoDuration || "Presentation video"}</p>
                    </div>
                  </div>
                )}

                {!meeting.documentName && !meeting.talkingPoints && !meeting.videoId && (
                  <p className="text-xs text-slate-400">Silent attendee mode — agent joined to take notes and monitor discussion.</p>
                )}
              </CardContent>
            </Card>

            {/* 6. EXECUTION LOG TIMELINE */}
            <Card className="border-slate-200/80 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-slate-900">Execution Log</CardTitle>
                <CardDescription className="text-xs">Live step-by-step audit of the agent's actions.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-0 relative">
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200" />
                  {timeline.length ? (
                    timeline.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-4 relative">
                        <div
                          className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            item.type === "success" ? "bg-emerald-100" : "bg-sky-50"
                          }`}
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${
                              item.type === "success" ? "bg-emerald-500" : "bg-sky-500"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">{item.event}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{formatTime(item.timestamp)}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="detail-timeline-empty py-4 text-center">
                      <p className="text-sm text-slate-500 font-medium">{status}</p>
                      <span className="text-xs text-slate-400">
                        {formatDate(meeting.scheduledAt)} · {formatTime(meeting.scheduledAt)}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6">
            {/* Live Status Card */}
            <Card className="border-slate-200/80 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-slate-900">Session Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      meeting.status === "failed"
                        ? "bg-red-500"
                        : meeting.status === "completed"
                        ? "bg-emerald-500"
                        : "bg-sky-500 animate-pulse"
                    }`}
                  />
                  <span className="text-sm font-semibold text-slate-900">
                    {meeting.status === "failed"
                      ? "Agent encountered an error"
                      : meeting.status === "completed"
                      ? "Meeting completed successfully"
                      : `${status} · scheduled`}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Progress</span>
                    <span>{active ? (isLive ? "In Progress" : "Queued") : "Finished"}</span>
                  </div>
                  <Progress value={active ? (isLive ? 60 : 15) : 100} className="h-1.5" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 pt-0">
                {meeting.meetUrl && (
                  <a href={meeting.meetUrl} target="_blank" rel="noreferrer" className="w-full">
                    <Button size="sm" className="w-full text-xs font-semibold bg-black hover:bg-slate-800 text-white">
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Open Google Meet
                    </Button>
                  </a>
                )}
                {isLive && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLeaveMeeting}
                    disabled={isLeaving}
                    className="w-full text-xs text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Disconnect Agent
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Quick Metadata Card */}
            <Card className="border-slate-200/80 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-slate-900">Connection Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium uppercase">Google Meet URL</span>
                  <a href={meeting.meetUrl} target="_blank" rel="noreferrer" className="text-sky-600 font-medium truncate block mt-0.5">
                    {meeting.meetUrl}
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-slate-400 block font-medium uppercase">Date</span>
                    <span className="text-slate-800 font-semibold mt-0.5 block">{formatDate(meeting.scheduledAt)}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium uppercase">Time</span>
                    <span className="text-slate-800 font-semibold mt-0.5 block">{formatTime(meeting.scheduledAt)}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase">Watched Keywords</span>
                  <span className="text-slate-800 font-medium mt-0.5 block">
                    {meeting.keywordAlerts || "Your Name"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

export default function MeetingDetailPage() {
  return (
    <Suspense
      fallback={
        <DashboardShell>
          <div className="flex items-center justify-center min-h-[40vh]">
            <p className="text-sm text-slate-500">Loading meeting details...</p>
          </div>
        </DashboardShell>
      }
    >
      <MeetingDetailContent />
    </Suspense>
  );
}
