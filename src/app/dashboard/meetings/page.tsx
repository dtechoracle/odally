"use client";

import React from "react";
import Link from "next/link";
import { Plus, Search, Video as VideoIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { getAllMeetings as getAllMeetingsData } from "@/lib/db";
import { DashboardShell } from "@/components/layout/DashboardShell";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const statusColors: Record<string, string> = {
  scheduled: "bg-slate-100 text-slate-600",
  starting_soon: "bg-amber-50 text-amber-700",
  launching: "bg-amber-50 text-amber-700",
  joining: "bg-amber-50 text-amber-700",
  in_meeting: "bg-green-50 text-green-700",
  presenting: "bg-green-50 text-green-700",
  playing: "bg-green-50 text-green-700",
  monitoring: "bg-green-50 text-green-700",
  completed: "bg-green-50 text-green-700",
  failed: "bg-red-50 text-red-700",
  cancelled: "bg-slate-100 text-slate-400",
  running: "bg-blue-50 text-blue-700",
};

const statusLabels: Record<string, string> = {
  scheduled: "Scheduled",
  starting_soon: "Starting Soon",
  launching: "Launching",
  joining: "Joining",
  in_meeting: "In Meeting",
  presenting: "Presenting",
  playing: "Playing",
  monitoring: "Monitoring",
  completed: "Completed",
  failed: "Failed",
  cancelled: "Cancelled",
  running: "Running",
};

const filters = ["all", "upcoming", "completed", "cancelled", "failed"];

export default function MeetingsPage() {
  const [meetings, setMeetings] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [filter, setFilter] = React.useState<string>("all");
  const [query, setQuery] = React.useState("");
  const [meetingToDelete, setMeetingToDelete] = React.useState<any | null>(null);
  const [deleting, setDeleting] = React.useState(false);

  const fetchMeetings = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      const res = await fetch("/api/meetings");
      if (res.ok) {
        const data = await res.json();
        setMeetings(data.meetings || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchMeetings();
  }, []);

  const confirmDelete = async () => {
    if (!meetingToDelete) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/meetings/${meetingToDelete.id}`, { method: "DELETE" });
      if (!res.ok) {
        console.error("Delete failed:", await res.text());
      }
      setMeetingToDelete(null);
      await fetchMeetings();
    } catch (err) {
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  const filtered = meetings.filter((meeting) => {
    const isUpcoming = ["scheduled", "starting_soon", "launching", "joining"].includes(meeting.status);
    const matchesFilter = filter === "all" || (filter === "upcoming" ? isUpcoming : meeting.status === filter);
    const haystack = `${meeting.title} ${meeting.meetUrl} ${meeting.video?.title || ""}`.toLowerCase();
    return matchesFilter && haystack.includes(query.trim().toLowerCase());
  });

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Meetings</h1>
            <p className="text-sm text-slate-500 mt-1">Everything your agent has scheduled and completed.</p>
          </div>
          <Link href="/dashboard/meetings/schedule">
            <Button size="sm" className="bg-sky-500 hover:bg-sky-600 shadow-sm shadow-sky-200">
              <Plus className="h-3.5 w-3.5 mr-1.5" /> Schedule Meeting
            </Button>
          </Link>
        </div>

        <div className="meetings-toolbar">
          <div className="meetings-filters">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "meetings-filter",
                filter === f && "is-active"
              )}
            >
              {f === "all" ? "All" : f === "upcoming" ? "Upcoming" : statusLabels[f] || f}
            </button>
          ))}
          </div>
          <label className="meetings-search"><Search aria-hidden="true" /><Input aria-label="Search meetings" placeholder="Search meetings..." value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        </div>

        {/* Meeting Table */}
        <div className="rounded-xl border border-slate-200/60 overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-500">
              <Loader2 className="h-8 w-8 animate-spin text-sky-500" />
              <p className="text-sm font-medium">Loading your scheduled meetings...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Meeting</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date & Time</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Video</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((meeting) => (
                    <tr key={meeting.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50">
                            <VideoIcon className="h-4 w-4 text-sky-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{meeting.title}</p>
                            <p className="text-xs text-slate-500">{meeting.meetUrl}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-sm text-slate-900">{new Date(meeting.scheduledAt).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</p>
                        <p className="text-xs text-slate-500">{new Date(meeting.scheduledAt).toLocaleTimeString("en", { hour: "numeric", minute: "2-digit" })}</p>
                      </td>
                      <td className="px-5 py-4">
                        {meeting.video?.title ? (
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center">
                              <VideoIcon className="h-3 w-3 text-slate-500" />
                            </div>
                            <span className="text-sm text-slate-700">{meeting.video?.title}</span>
                          </div>
                        ) : (
                          <span className="text-sm text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <span className={cn("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium", statusColors[meeting.status] || statusColors.scheduled)}>
                          <span className={cn("meeting-status-dot", meeting.status === "failed" && "is-error", ["completed", "cancelled"].includes(meeting.status) && "is-muted", ["presenting", "joining", "running"].includes(meeting.status) && "is-pulsing")} />
                          {statusLabels[meeting.status] || meeting.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <Link href={`/dashboard/meetings/${meeting.id}`} className="meeting-view-link">View details <span aria-hidden="true">→</span></Link>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setMeetingToDelete(meeting);
                          }}
                          className="ml-4 text-xs font-medium text-red-500 hover:text-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-sm text-slate-500">{query ? "No meetings match your search." : "Nothing scheduled yet."}</p>
              {!query && <p className="mt-1 text-xs text-slate-400">Schedule your first meeting and let your agent handle it.</p>}
            </div>
          )}
        </div>

        <AlertDialog open={!!meetingToDelete} onOpenChange={(open) => !open && !deleting && setMeetingToDelete(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Meeting</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to cancel and delete &quot;{meetingToDelete?.title}&quot;? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center justify-end gap-3 mt-4">
              <AlertDialogCancel
                disabled={deleting}
                style={{
                  padding: "8px 18px",
                  borderRadius: "8px",
                  backgroundColor: "#f1f5f9",
                  color: "#334155",
                  border: "1px solid #cbd5e1",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: deleting ? "not-allowed" : "pointer",
                }}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => {
                  e.preventDefault();
                  if (!deleting) confirmDelete();
                }}
                disabled={deleting}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "8px 20px",
                  minWidth: "120px",
                  borderRadius: "8px",
                  backgroundColor: deleting ? "#991b1b" : "#dc2626",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: deleting ? "not-allowed" : "pointer",
                  border: "none",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  opacity: deleting ? 0.8 : 1,
                  transition: "all 0.15s ease",
                }}
              >
                {deleting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Yes, Delete</span>
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </DashboardShell>
  );
}
