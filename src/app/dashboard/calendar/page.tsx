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
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    setSelectedDate(new Date());
    async function loadMeetings() {
      try {
        setLoading(true);
        const res = await fetch("/api/meetings");
        if (res.ok) {
          const data = await res.json();
          setMeetings(data.meetings || []);
        }
      } catch (err) {
        console.error("Failed to load meetings for calendar:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMeetings();
  }, []);

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
          <Button
            size="default"
            className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm flex items-center gap-2 self-start sm:self-auto"
            onClick={() => router.push("/dashboard/meetings/schedule")}
          >
            <Plus className="h-4 w-4" /> Schedule Meeting
          </Button>
        </div>

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
