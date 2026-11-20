"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  isToday,
  isBefore,
  startOfDay,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Loader2,
  Calendar as CalendarIcon,
  Video,
  Clock,
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { formatTime } from "@/lib/utils";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function CalendarView({
  meetings,
  onDateSelect,
  selectedDate,
}: {
  meetings: any[];
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date | null;
}) {
  const [currentMonth, setCurrentMonth] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    setCurrentMonth(new Date(now.getFullYear(), now.getMonth(), 1));
  }, []);

  if (!currentMonth) {
    return (
      <Card className="border-slate-200/80 shadow-sm rounded-2xl overflow-hidden bg-white">
        <CardContent className="p-4 sm:p-6 min-h-[420px] flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-slate-300" />
        </CardContent>
      </Card>
    );
  }

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days: Date[] = [];
  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const monthMeetings = meetings.filter((meeting) =>
    isSameMonth(new Date(meeting.scheduledAt), currentMonth)
  );

  return (
    <Card className="border-slate-200/80 shadow-sm rounded-2xl overflow-hidden bg-white">
      <CardContent className="p-4 sm:p-6">
        {/* Month Navigation Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {format(currentMonth, "MMMM yyyy")}
            </h3>
            <span
              className="inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-full text-xs font-bold bg-sky-50 text-[#087c9f] border border-sky-200/80 shadow-2xs"
              title={`${monthMeetings.length} meetings in ${format(currentMonth, "MMMM yyyy")}`}
            >
              {monthMeetings.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200/60">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-3 text-xs font-semibold rounded-lg text-slate-700 hover:bg-white hover:text-slate-900 hover:shadow-xs transition-all"
              onClick={() => {
                const today = new Date();
                setCurrentMonth(startOfMonth(today));
                onDateSelect?.(today);
              }}
            >
              Today
            </Button>
            <div className="h-4 w-px bg-slate-200" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-xs transition-all"
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-xs transition-all"
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
          {weekDays.map((d) => (
            <div
              key={d}
              className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 py-1.5"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar days grid */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {days.map((d) => {
            const dateStr = format(d, "yyyy-MM-dd");
            const dayMeetings = meetings.filter(
              (meeting) => format(new Date(meeting.scheduledAt), "yyyy-MM-dd") === dateStr
            );
            const inMonth = isSameMonth(d, currentMonth);
            const selected = selectedDate && isSameDay(d, selectedDate);
            const today = isToday(d);
            const isPastDay = isBefore(d, startOfDay(new Date()));

            return (
              <button
                key={dateStr}
                type="button"
                onClick={() => onDateSelect?.(d)}
                className={cn(
                  "relative group text-left transition-all outline-none",
                  // Cell sizing: compact square on mobile, spacious card on desktop
                  "min-h-[46px] sm:min-h-[88px] lg:min-h-[96px] p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border",
                  // Normal in-month days
                  inMonth && !isPastDay && !selected && "bg-white border-slate-100 hover:border-[#38c6ec]/60 hover:bg-sky-50/20",
                  // Past days: visible slight grey background, no border
                  isPastDay && !selected && "bg-slate-100 border-transparent text-slate-400 hover:bg-slate-200/60",
                  // Out of month days (future)
                  !inMonth && !isPastDay && !selected && "bg-slate-50/50 border-transparent text-slate-300 hover:bg-slate-100/50",
                  // Today outline/subtle highlight when not selected
                  today && !selected && "border-[#38c6ec] ring-2 ring-[#38c6ec]/25 bg-sky-50/30",
                  // Brand color fill when selected
                  selected &&
                    "border-[#38c6ec] bg-[#38c6ec] text-white shadow-sm ring-2 ring-[#38c6ec]/30 hover:bg-[#38c6ec] hover:border-[#38c6ec]"
                )}
              >
                {/* Header row in cell: Date number & indicators */}
                <div className="flex items-center justify-between w-full">
                  <span
                    className={cn(
                      "text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center transition-colors",
                      // Today and selected: sharp white circle with deep teal number on brand cyan
                      today && selected && "h-6 w-6 bg-white text-[#087c9f] font-extrabold text-xs shadow-xs",
                      // Today and NOT selected: bold dark slate circle with white text for maximum visibility (zero wash-out)
                      today && !selected && "h-6 w-6 bg-slate-900 text-white font-bold text-xs shadow-xs",
                      // Selected (not today): bold white text
                      selected && !today && "text-white font-extrabold",
                      // Past day: muted slate
                      isPastDay && !today && !selected && "text-slate-400 font-normal",
                      // Normal in-month day: clean slate-800
                      !isPastDay && !today && !selected && inMonth && "text-slate-800 font-semibold",
                      // Out of month day: faint slate-300
                      !inMonth && !selected && "text-slate-300 font-normal"
                    )}
                  >
                    {format(d, "d")}
                  </span>

                  {/* Meeting badge counter on tablet/desktop */}
                  {dayMeetings.length > 0 && !selected && (
                    <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
                      {dayMeetings.length}
                    </span>
                  )}
                  {dayMeetings.length > 0 && selected && (
                    <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-white/25 text-white">
                      {dayMeetings.length}
                    </span>
                  )}
                </div>

                {/* Mobile indicators: Color dots */}
                {dayMeetings.length > 0 && (
                  <div className="flex sm:hidden items-center justify-center gap-1 mt-1">
                    {dayMeetings.slice(0, 3).map((meeting, idx) => (
                      <span
                        key={idx}
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          selected ? "bg-white" : "bg-[#087c9f]"
                        )}
                      />
                    ))}
                    {dayMeetings.length > 3 && (
                      <span
                        className={cn(
                          "text-[9px] font-bold leading-none",
                          selected ? "text-white" : "text-[#087c9f]"
                        )}
                      >
                        +
                      </span>
                    )}
                  </div>
                )}

                {/* Desktop meeting preview chips */}
                <div className="hidden sm:flex flex-col gap-1 mt-1.5 w-full overflow-hidden">
                  {dayMeetings.slice(0, 2).map((m) => (
                    <div
                      key={m.id}
                      className={cn(
                        "text-[10px] lg:text-[11px] truncate px-1.5 py-0.5 rounded-md font-medium flex items-center gap-1",
                        selected
                          ? "bg-white/20 text-white border border-white/30 backdrop-blur-xs font-semibold"
                          : "bg-sky-50 text-sky-900 border border-sky-100 hover:bg-sky-100"
                      )}
                      title={`${formatTime(m.scheduledAt)} - ${m.title}`}
                    >
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full flex-shrink-0",
                          selected ? "bg-white" : "bg-[#38c6ec]"
                        )}
                      />
                      <span className="font-semibold">{formatTime(m.scheduledAt)}</span>
                      <span className="truncate opacity-80">{m.title}</span>
                    </div>
                  ))}
                  {dayMeetings.length > 2 && (
                    <div
                      className={cn(
                        "text-[10px] font-medium px-1",
                        selected ? "text-white/80" : "text-slate-500"
                      )}
                    >
                      +{dayMeetings.length - 2} more
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default function CalendarPage() {
  const router = useRouter();
  const [meetings, setMeetings] = useState<any[]>([]);
  const [googleEvents, setGoogleEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncingGoogle, setSyncingGoogle] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const loadMeetings = async () => {
    try {
      const res = await fetch("/api/meetings");
      if (res.ok) {
        const data = await res.json();
        setMeetings(data.meetings || []);
      }
    } catch (err) {
      console.error("Failed to load meetings for calendar:", err);
    }
  };

  const loadGoogleEvents = async () => {
    try {
      const res = await fetch("/api/calendar/events");
      if (res.ok) {
        const data = await res.json();
        setGoogleEvents(data.events || []);
      }
    } catch (err) {
      console.error("Failed to load Google events:", err);
    }
  };

  useEffect(() => {
    setSelectedDate(new Date());
    async function init() {
      setLoading(true);
      await Promise.all([loadMeetings(), loadGoogleEvents()]);
      setLoading(false);
    }
    init();
  }, []);

  const handleSyncGoogle = async () => {
    setSyncingGoogle(true);
    setSyncMessage(null);
    try {
      const res = await fetch("/api/calendar/sync", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        await Promise.all([loadMeetings(), loadGoogleEvents()]);
        setSyncMessage(
          data.importedCount > 0
            ? `Successfully synced ${data.importedCount} Google Meet call(s) from your calendar!`
            : "Google Calendar checked. No new Google Meet links found."
        );
      } else {
        setSyncMessage(data.error || "Could not sync Google Calendar.");
      }
    } catch (err: any) {
      setSyncMessage(err?.message || "Failed to communicate with Google Calendar.");
    } finally {
      setSyncingGoogle(false);
      setTimeout(() => setSyncMessage(null), 5000);
    }
  };

  const handleImportSingleGoogleEvent = async (evt: any) => {
    setSyncingGoogle(true);
    try {
      const res = await fetch("/api/calendar/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: evt.id }),
      });
      if (res.ok) {
        await Promise.all([loadMeetings(), loadGoogleEvents()]);
        setSyncMessage(`Scheduled Odally for "${evt.title}"!`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSyncingGoogle(false);
      setTimeout(() => setSyncMessage(null), 5000);
    }
  };

  const upcoming = meetings
    .filter((meeting) =>
      ["scheduled", "starting_soon", "launching", "joining", "running"].includes(meeting.status)
    )
    .sort((a, b) => Date.parse(a.scheduledAt) - Date.parse(b.scheduledAt))
    .slice(0, 5);

  const selectedDateStr = selectedDate ? format(selectedDate, "yyyy-MM-dd") : null;
  const selectedMeetings = selectedDateStr
    ? meetings.filter((m) => format(new Date(m.scheduledAt), "yyyy-MM-dd") === selectedDateStr)
    : [];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "running":
      case "joining":
      case "launching":
        return <Badge className="bg-emerald-500 text-white font-medium hover:bg-emerald-600">Live</Badge>;
      case "starting_soon":
        return <Badge className="bg-amber-500 text-white font-medium hover:bg-amber-600">Starting soon</Badge>;
      case "completed":
        return <Badge variant="outline" className="text-slate-600 border-slate-200">Completed</Badge>;
      case "failed":
        return <Badge className="bg-red-500 text-white font-medium hover:bg-red-600">Failed</Badge>;
      default:
        return <Badge variant="neutral" className="bg-slate-100 text-slate-700">Scheduled</Badge>;
    }
  };

  return (
    <DashboardShell>
      <div className="space-y-6 max-w-7xl mx-auto pb-12">
        {/* Page Topbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Calendar
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Interactive timeline of your automated meetings and agent schedules.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap self-start sm:self-auto">
            <Button
              variant="outline"
              size="default"
              disabled={syncingGoogle}
              onClick={handleSyncGoogle}
              className="rounded-xl border-slate-200 hover:bg-slate-50 text-slate-800 shadow-2xs flex items-center gap-2 bg-white"
            >
              {syncingGoogle ? (
                <Loader2 className="h-4 w-4 animate-spin text-sky-500" />
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              )}
              <span>{syncingGoogle ? "Syncing Calendar..." : "Sync Google Calendar"}</span>
            </Button>
            <Button
              size="default"
              className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm flex items-center gap-2"
              onClick={() => router.push("/dashboard/meetings/schedule")}
            >
              <Plus className="h-4 w-4" /> Schedule Meeting
            </Button>
          </div>
        </div>

        {/* Sync Status Banner */}
        {syncMessage && (
          <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-800 flex items-center justify-between gap-2 shadow-2xs">
            <span>{syncMessage}</span>
            <button
              onClick={() => setSyncMessage(null)}
              className="text-sky-600 hover:text-sky-800 font-bold ml-2"
            >
              ×
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-3 text-slate-500 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <Loader2 className="h-8 w-8 animate-spin text-sky-500" />
            <p className="text-sm font-medium">Loading your calendar schedules...</p>
          </div>
        ) : (
          <div className="calendar-layout grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* Calendar Main Grid (2 cols on desktop) */}
            <div className="lg:col-span-2">
              <CalendarView
                meetings={meetings}
                onDateSelect={setSelectedDate}
                selectedDate={selectedDate}
              />
            </div>

            {/* Sidebar: Day Agenda & Upcoming (1 col on desktop) */}
            <div className="space-y-6">
              {/* Selected Date Card */}
              <Card className="border-slate-200/80 shadow-sm rounded-2xl overflow-hidden bg-white">
                <div className="p-5 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center">
                      <CalendarDays className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        {selectedDate ? format(selectedDate, "EEEE, MMMM d") : "Selected Day"}
                      </h2>
                      <p className="text-xs text-slate-500">
                        {selectedDate && isToday(selectedDate)
                          ? "Today"
                          : selectedMeetings.length === 0
                          ? "No meetings"
                          : `${selectedMeetings.length} scheduled`}
                      </p>
                    </div>
                  </div>

                  {selectedDate && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-xs text-sky-600 hover:text-sky-700 hover:bg-sky-50"
                      onClick={() =>
                        router.push(
                          `/dashboard/meetings/schedule?date=${format(selectedDate, "yyyy-MM-dd")}`
                        )
                      }
                    >
                      <Plus className="h-3.5 w-3.5 mr-1" /> Add
                    </Button>
                  )}
                </div>

                <CardContent className="p-5">
                  {selectedMeetings.length > 0 ? (
                    <div className="space-y-3">
                      {selectedMeetings.map((meeting) => (
                        <div
                          key={meeting.id}
                          onClick={() => router.push(`/dashboard/meetings/${meeting.id}`)}
                          className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-sm transition-all cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                              {meeting.title}
                            </h3>
                            {getStatusBadge(meeting.status)}
                          </div>

                          <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1 font-medium text-slate-700">
                              <Clock className="h-3.5 w-3.5 text-slate-400" />
                              {formatTime(meeting.scheduledAt)}
                            </span>
                            {meeting.videoTitle && (
                              <span className="flex items-center gap-1 truncate text-slate-500">
                                <Video className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                                <span className="truncate">{meeting.videoTitle}</span>
                              </span>
                            )}
                          </div>

                          {meeting.meetUrl && (
                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                              <span className="text-slate-400 truncate max-w-[180px]">
                                {meeting.meetUrl.replace(/^https?:\/\//, "")}
                              </span>
                              <span className="text-sky-600 font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                                Details <ArrowUpRight className="h-3.5 w-3.5" />
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 px-4">
                      <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                        <CalendarIcon className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">No meetings on this day</p>
                      <p className="text-xs text-slate-400 mt-1 max-w-[200px] mx-auto">
                        Your agent has no assignments for this date.
                      </p>
                      {selectedDate && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 text-xs font-semibold rounded-xl border-slate-200"
                          onClick={() =>
                            router.push(
                              `/dashboard/meetings/schedule?date=${format(selectedDate, "yyyy-MM-dd")}`
                            )
                          }
                        >
                          <Plus className="h-3.5 w-3.5 mr-1 text-sky-500" /> Schedule for this day
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Google Calendar Live Events */}
              {googleEvents.length > 0 && (
                <Card className="border-sky-200/80 shadow-sm rounded-2xl overflow-hidden bg-white">
                  <div className="p-4 border-b border-sky-100 bg-sky-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Google Calendar ({googleEvents.filter((e) => e.hasMeetLink).length} Meet Calls)
                      </h3>
                    </div>
                    <Badge variant="outline" className="text-[10px] text-sky-700 bg-white border-sky-200">
                      Live
                    </Badge>
                  </div>
                  <CardContent className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
                    {googleEvents.filter((e) => e.hasMeetLink).slice(0, 4).map((evt) => (
                      <div
                        key={evt.id}
                        className="p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-sky-50/40 hover:border-sky-200 transition-all flex flex-col gap-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-bold text-slate-900 truncate">{evt.title}</p>
                          <Badge variant="neutral" className="text-[9px] bg-sky-100 text-sky-800 shrink-0">
                            Google Meet
                          </Badge>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          {format(new Date(evt.scheduledAt), "MMM d")} · {formatTime(evt.scheduledAt)}
                        </p>
                        <Button
                          size="sm"
                          disabled={syncingGoogle}
                          onClick={() => handleImportSingleGoogleEvent(evt)}
                          className="h-7 text-[11px] font-semibold bg-sky-600 hover:bg-sky-700 text-white rounded-lg w-full mt-1"
                        >
                          Dispatch Odally to this Call
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Upcoming Meetings List */}
              <Card className="border-slate-200/80 shadow-sm rounded-2xl overflow-hidden bg-white">
                <div className="p-4 border-b border-slate-100 bg-slate-50/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Next Upcoming
                  </h3>
                </div>
                <CardContent className="p-4 space-y-3">
                  {upcoming.length > 0 ? (
                    upcoming.map((meeting) => (
                      <div
                        key={meeting.id}
                        onClick={() => router.push(`/dashboard/meetings/${meeting.id}`)}
                        className="p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all cursor-pointer flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 truncate">{meeting.title}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            {format(new Date(meeting.scheduledAt), "MMM d")} · {formatTime(meeting.scheduledAt)}
                          </p>
                        </div>
                        {getStatusBadge(meeting.status)}
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 text-center py-4">No upcoming meetings queued.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
