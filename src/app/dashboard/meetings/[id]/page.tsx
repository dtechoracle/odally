"use client";

import { unstable_noStore as noStore } from "next/cache";
noStore();

import React, { Suspense, useState, useEffect, useMemo } from "react";
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
  ChevronDown,
  ChevronUp,
  Users,
  CheckCircle2,
  ListTodo,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { getExecutionLog } from "@/lib/db";
import { formatDate, formatTime, cn } from "@/lib/utils";

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
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    summary: true,
    mentions: true,
    questions: true,
    email: true,
    materials: true,
    execution: true,
  });

  const toggleSection = (section: string) => {
    setCollapsedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const allCollapsed = Object.values(collapsedSections).every(Boolean);

  const toggleAllSections = () => {
    const nextVal = !allCollapsed;
    setCollapsedSections({
      summary: nextVal,
      mentions: nextVal,
      questions: nextVal,
      email: nextVal,
      materials: nextVal,
      execution: nextVal,
    });
  };

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

  // Parse AI Intelligence fields if present (Must run before early returns for React Hook rules)
  let parsedSummary: { bullets?: string[]; actionItems?: string[]; attendees?: string[] } | null = null;
  if (meeting?.summary) {
    try {
      parsedSummary = JSON.parse(meeting.summary);
    } catch {
      parsedSummary = { bullets: [meeting.summary] };
    }
  }

  let parsedMentions: Array<{ keyword: string; speaker?: string; timestamp: string; context: string }> = [];
  if (meeting?.mentions) {
    try {
      const rawMentions = JSON.parse(meeting.mentions);
      if (Array.isArray(rawMentions)) {
        parsedMentions = rawMentions;
      }
    } catch {}
  }

  let parsedQuestions: Array<{ id: string; author: string; question: string; timestamp: string }> = [];
  if (meeting?.attendeeQuestions) {
    try {
      const rawQ = JSON.parse(meeting.attendeeQuestions);
      if (Array.isArray(rawQ)) {
        parsedQuestions = rawQ.map((item: any, idx: number) => {
          if (typeof item === "string") {
            const colonIdx = item.indexOf(":");
            if (colonIdx > 0) {
              return {
                id: `q-${idx}`,
                author: item.slice(0, colonIdx).trim(),
                question: item.slice(colonIdx + 1).trim(),
                timestamp: "",
              };
            }
            return { id: `q-${idx}`, author: "Attendee", question: item, timestamp: "" };
          }
          return {
            id: item.id || `q-${idx}`,
            author: item.author || item.speaker || "Attendee",
            question: item.question || item.text || "",
            timestamp: item.timestamp || "",
          };
        });
      }
    } catch {}
  }

  // Compute all unique attendees/participants identified across summary, questions, and mentions
  const identifiedAttendees = useMemo(() => {
    const map = new Map<string, string>();
    const addName = (name?: string) => {
      if (!name) return;
      const trimmed = name.trim();
      if (!trimmed) return;
      const lower = trimmed.toLowerCase();
      if (
        lower === "you" ||
        lower.includes("odally") ||
        lower === "system" ||
        lower === "presenter" ||
        lower === "the presenter"
      ) {
        return;
      }
      if (!map.has(lower)) {
        map.set(lower, trimmed);
      }
    };

    if (parsedSummary?.attendees && Array.isArray(parsedSummary.attendees)) {
      parsedSummary.attendees.forEach(addName);
    }
    parsedQuestions.forEach((q) => addName(q.author));
    parsedMentions.forEach((m) => addName(m.speaker));

    return Array.from(map.values());
  }, [parsedSummary, parsedQuestions, parsedMentions]);

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
          <div className="lg:col-span-2 space-y-4">
            {/* Quick Accordion Toolbar */}
            <div className="flex items-center justify-between px-1 py-0.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Session Intelligence & Briefing
                </span>
                <Badge variant="neutral" className="text-[10px] font-medium text-slate-500 bg-slate-100">
                  Collapsible sections
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAllSections}
                className="h-7 px-2 text-xs text-slate-600 hover:text-slate-900 gap-1.5"
              >
                {allCollapsed ? (
                  <>
                    <ChevronDown className="h-3.5 w-3.5" />
                    Expand All
                  </>
                ) : (
                  <>
                    <ChevronUp className="h-3.5 w-3.5" />
                    Collapse All
                  </>
                )}
              </Button>
            </div>
            
            {/* 1. POST-MEETING AI SUMMARY & ACTION ITEMS */}
            {(meeting.status === "completed" || meeting.summary) && (
              <Card className="border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden transition-all duration-200">
                <CardHeader
                  className="p-4 sm:p-5 cursor-pointer select-none hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  onClick={() => toggleSection("summary")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                            Post-Meeting Executive Summary
                          </CardTitle>
                          {identifiedAttendees.length > 0 && (
                            <Badge variant="outline" className="text-[11px] font-normal text-indigo-700 bg-indigo-50/70 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800">
                              <Users className="h-3 w-3 mr-1 inline" />
                              {identifiedAttendees.length} {identifiedAttendees.length === 1 ? "participant" : "participants"}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-xs text-slate-500 mt-0.5 truncate">
                          Key takeaways, attendee discussion highlights, and action items.
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGenerateSummary();
                        }}
                        disabled={generatingSummary}
                        className="text-xs text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 h-8 px-2.5"
                      >
                        {generatingSummary ? "Refreshing..." : "Re-generate"}
                      </Button>
                      <div className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600">
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", !collapsedSections.summary && "rotate-180")} />
                      </div>
                    </div>
                  </div>

                  {/* Collapsed One-Line Preview */}
                  {collapsedSections.summary && parsedSummary && (
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 shrink-0">Preview:</span>
                      <span className="truncate italic text-slate-600 dark:text-slate-400">
                        {parsedSummary.bullets?.[0] || "Click to view full executive summary"}
                      </span>
                      <span className="ml-auto text-[11px] text-indigo-600 dark:text-indigo-400 font-medium shrink-0">
                        Click to view
                      </span>
                    </div>
                  )}
                </CardHeader>

                {!collapsedSections.summary && (
                  <CardContent className="p-4 sm:p-5 pt-0 space-y-5 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                    {parsedSummary ? (
                      <>
                        {/* 1.1 Attendees & Participants Row */}
                        {identifiedAttendees.length > 0 && (
                          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60">
                            <div className="flex items-center justify-between mb-2.5">
                              <div className="flex items-center gap-1.5">
                                <Users className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                                  Identified Attendees & Speakers ({identifiedAttendees.length})
                                </span>
                              </div>
                              <span className="text-[11px] text-slate-400">Captured in call</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {identifiedAttendees.map((name, i) => {
                                const initials = name
                                  .split(" ")
                                  .filter(Boolean)
                                  .map((p) => p[0])
                                  .slice(0, 2)
                                  .join("")
                                  .toUpperCase();
                                return (
                                  <div
                                    key={i}
                                    className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-xs font-medium text-slate-800 dark:text-slate-200"
                                  >
                                    <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                                      {initials || "P"}
                                    </span>
                                    <span>{name}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* 1.2 Executive Recap Bullets */}
                        <div className="space-y-2.5">
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                            Executive Highlights & Discussions
                          </p>
                          <div className="space-y-2">
                            {parsedSummary.bullets?.map((b, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200/70 dark:border-slate-700/60 text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
                              >
                                <span className="w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                <div className="flex-1">{b}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 1.3 Action Items */}
                        {parsedSummary.actionItems && parsedSummary.actionItems.length > 0 && (
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                              Next Steps & Action Items
                            </p>
                            <div className="space-y-2">
                              {parsedSummary.actionItems.map((act, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-sm text-slate-800 dark:text-slate-200"
                                >
                                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">
                                    ✓
                                  </div>
                                  <div className="flex-1 font-medium leading-relaxed">{act}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="py-6 text-center">
                        <p className="text-sm text-slate-500 mb-3">No summary generated yet for this session.</p>
                        <Button
                          size="sm"
                          onClick={handleGenerateSummary}
                          disabled={generatingSummary}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs"
                        >
                          <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                          Generate AI Summary Now
                        </Button>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            )}

            {/* 2. "DID THEY MENTION MY NAME?" ALERTS */}
            {parsedMentions.length > 0 && (
              <Card className="border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden transition-all duration-200">
                <CardHeader
                  className="p-4 sm:p-5 cursor-pointer select-none hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  onClick={() => toggleSection("mentions")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 shrink-0">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                            Name & Keyword Alerts
                          </CardTitle>
                          <Badge variant="outline" className="text-[11px] font-normal text-amber-700 bg-amber-50/70 border-amber-200">
                            {parsedMentions.length} {parsedMentions.length === 1 ? "alert" : "alerts"}
                          </Badge>
                        </div>
                        <CardDescription className="text-xs text-slate-500 mt-0.5 truncate">
                          Times you, your project, or monitored keywords were spoken.
                        </CardDescription>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600">
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", !collapsedSections.mentions && "rotate-180")} />
                    </div>
                  </div>
                </CardHeader>
                {!collapsedSections.mentions && (
                  <CardContent className="p-4 sm:p-5 pt-0 space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                    {parsedMentions.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                              {m.keyword}
                            </span>
                            {m.speaker && (
                              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                Spoken by <strong className="font-semibold text-slate-900 dark:text-slate-100">{m.speaker}</strong>
                              </span>
                            )}
                            <span className="text-xs text-slate-400">· {m.timestamp}</span>
                          </div>
                          <p className="text-sm text-slate-800 dark:text-slate-200 italic pl-3 border-l-2 border-amber-300 dark:border-amber-700">
                            "{m.context}"
                          </p>
                        </div>
                        <Badge variant="outline" className="text-[11px] text-amber-700 border-amber-300 shrink-0 self-start">
                          Attention
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            )}

            {/* 3. QUESTIONS ASKED BY ATTENDEES */}
            {parsedQuestions.length > 0 && (
              <Card className="border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden transition-all duration-200">
                <CardHeader
                  className="p-4 sm:p-5 cursor-pointer select-none hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  onClick={() => toggleSection("questions")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                            Questions from Attendees
                          </CardTitle>
                          <Badge variant="outline" className="text-[11px] font-normal text-sky-700 bg-sky-50/70 border-sky-200">
                            {parsedQuestions.length} {parsedQuestions.length === 1 ? "question" : "questions"}
                          </Badge>
                        </div>
                        <CardDescription className="text-xs text-slate-500 mt-0.5 truncate">
                          Captured from spoken questions and Google Meet chat during the call.
                        </CardDescription>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600">
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", !collapsedSections.questions && "rotate-180")} />
                    </div>
                  </div>
                </CardHeader>
                {!collapsedSections.questions && (
                  <CardContent className="p-4 sm:p-5 pt-0 space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                    {parsedQuestions.map((q) => {
                      const initials = q.author
                        .split(" ")
                        .filter(Boolean)
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase();
                      return (
                        <div
                          key={q.id}
                          className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3"
                        >
                          <span className="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {initials || "Q"}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                                {q.author}
                              </span>
                              {q.timestamp && (
                                <span className="text-[11px] text-slate-400">{q.timestamp}</span>
                              )}
                            </div>
                            <p className="text-sm text-slate-800 dark:text-slate-200 mt-1 leading-relaxed">
                              {q.question}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                )}
              </Card>
            )}

            {/* 4. READY-TO-SEND FOLLOW-UP EMAIL DRAFT */}
            {meeting.followUpDraft && (
              <Card className="border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden transition-all duration-200">
                <CardHeader
                  className="p-4 sm:p-5 cursor-pointer select-none hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  onClick={() => toggleSection("email")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 shrink-0">
                        <Send className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                            One-Click Follow-Up Email
                          </CardTitle>
                          <Badge variant="outline" className="text-[11px] font-normal text-emerald-700 bg-emerald-50/70 border-emerald-200">
                            Ready to send
                          </Badge>
                        </div>
                        <CardDescription className="text-xs text-slate-500 mt-0.5 truncate">
                          Pre-written draft addressing recap points and attendees by name.
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(meeting.followUpDraft);
                        }}
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
                      <div className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600">
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", !collapsedSections.email && "rotate-180")} />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                {!collapsedSections.email && (
                  <CardContent className="p-4 sm:p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                    <pre className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap font-sans leading-relaxed">
                      {meeting.followUpDraft}
                    </pre>
                  </CardContent>
                )}
              </Card>
            )}

            {/* 5. MEETING MATERIALS (What was fed to the AI) */}
            <Card className="border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden transition-all duration-200">
              <CardHeader
                className="p-4 sm:p-5 cursor-pointer select-none hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                onClick={() => toggleSection("materials")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 shrink-0">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                          Agent Brief & Materials Fed
                        </CardTitle>
                        <Badge variant="outline" className="text-[11px] font-normal text-slate-600 bg-slate-50 border-slate-200">
                          {meeting.videoId ? "Video presentation" : meeting.documentName ? "Document attached" : "Notes & Brief"}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs text-slate-500 mt-0.5 truncate">
                        The presentation, document, or instructions given to the agent.
                      </CardDescription>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600">
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", !collapsedSections.materials && "rotate-180")} />
                  </div>
                </div>
              </CardHeader>
              {!collapsedSections.materials && (
                <CardContent className="p-4 sm:p-5 pt-0 space-y-4 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                  {/* Intro announcement */}
                  <div className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Polite Announcement Spoken Upon Joining
                    </p>
                    <p className="text-xs text-slate-800 dark:text-slate-200 italic">
                      "{meeting.introMessage || `Hi everyone! I'm Odally here on behalf of the presenter. I'll be sharing their material and taking notes for them today.`}"
                    </p>
                  </div>

                  {/* Document or Notes */}
                  {meeting.documentName && (
                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-800/40">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{meeting.documentName}</p>
                          <p className="text-xs text-slate-500">Document fed to the agent</p>
                        </div>
                      </div>
                      {meeting.documentUrl && (
                        <a
                          href={meeting.documentUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button variant="outline" size="sm" className="h-8 text-xs">
                            <ExternalLink className="h-3.5 w-3.5 mr-1" /> View File
                          </Button>
                        </a>
                      )}
                    </div>
                  )}

                  {/* Talking Points */}
                  {meeting.talkingPoints && (
                    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        Talking Points & Instructions
                      </p>
                      <p className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{meeting.talkingPoints}</p>
                    </div>
                  )}

                  {/* Video Presentation */}
                  {meeting.videoId && (
                    <div className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-800/40">
                      <div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                        <VideoIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{meeting.video?.title || meeting.videoTitle || "Video Presentation"}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{meeting.video?.durationFormatted || meeting.videoDuration || "Presentation video"}</p>
                      </div>
                    </div>
                  )}

                  {!meeting.documentName && !meeting.talkingPoints && !meeting.videoId && (
                    <p className="text-xs text-slate-400">Silent attendee mode — agent joined to take notes and monitor discussion.</p>
                  )}
                </CardContent>
              )}
            </Card>

            {/* 6. EXECUTION LOG TIMELINE */}
            <Card className="border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden transition-all duration-200">
              <CardHeader
                className="p-4 sm:p-5 cursor-pointer select-none hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                onClick={() => toggleSection("execution")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base font-semibold text-slate-900 dark:text-slate-100">
                          Execution Log
                        </CardTitle>
                        <Badge variant="outline" className="text-[11px] font-normal text-slate-600 bg-slate-50 border-slate-200">
                          {timeline.length} {timeline.length === 1 ? "event" : "events"}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs text-slate-500 mt-0.5 truncate">
                        Live step-by-step audit of the agent's actions.
                      </CardDescription>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600">
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", !collapsedSections.execution && "rotate-180")} />
                  </div>
                </div>
              </CardHeader>
              {!collapsedSections.execution && (
                <CardContent className="p-4 sm:p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-1">
                  <div className="space-y-0 relative">
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700" />
                    {timeline.length ? (
                      timeline.map((item) => (
                        <div key={item.id} className="flex gap-4 pb-4 relative">
                          <div
                            className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                              item.type === "success" ? "bg-emerald-100 dark:bg-emerald-950" : "bg-sky-50 dark:bg-sky-950"
                            }`}
                          >
                            <div
                              className={`h-2 w-2 rounded-full ${
                                item.type === "success" ? "bg-emerald-500" : "bg-sky-500"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.event}</p>
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
              )}
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
