"use client";

import { unstable_noStore as noStore } from "next/cache";
noStore();

import React, { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Video as VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { getExecutionLog, getMeetingById } from "@/lib/db";
import { formatDate, formatTime } from "@/lib/utils";

const statusLabels: Record<string, string> = {
  scheduled: "Scheduled", starting_soon: "Starting soon", launching: "Preparing",
  joining: "Joining", in_meeting: "In meeting", presenting: "Presenting",
  playing: "Presenting", monitoring: "Monitoring", completed: "Completed",
  failed: "Failed", cancelled: "Cancelled", running: "Running",
};

function MeetingDetailContent() {
  const params = useParams<{ id: string }>();
  const [meeting, setMeeting] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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
  }, [params?.id]);

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
        <div className="detail-empty">
          <h1>Meeting not found</h1>
          <p>This meeting may have been removed.</p>
          <Link href="/dashboard/meetings">Back to meetings</Link>
        </div>
      </DashboardShell>
    );
  }

  const execution = getExecutionLog(meeting.id);
  const timeline = execution?.events ?? [];
  const active = !["completed", "failed", "cancelled"].includes(meeting.status);
  const status = statusLabels[meeting.status] || meeting.status;

  return (
    <DashboardShell>
      <div className="meeting-detail-page space-y-6">
        <div className="meeting-detail-heading">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="h-8"><ArrowLeft className="h-4 w-4" /> Meetings</Button>
          </Link>
          <div className="meeting-detail-heading__title"><h1>{meeting.title}</h1><p>{formatDate(meeting.scheduledAt)} <span>·</span> {formatTime(meeting.scheduledAt)}</p></div>
          <Badge className={meeting.status === "failed" ? "bg-red-50 text-red-700" : meeting.status === "completed" ? "bg-green-50 text-green-700" : "bg-sky-50 text-sky-700"}><span className="app-status-dot" />{status}</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Meeting details</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Date</p><p className="text-sm font-medium text-slate-900 mt-0.5">{formatDate(meeting.scheduledAt)}</p></div>
                  <div><p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Time</p><p className="text-sm font-medium text-slate-900 mt-0.5">{formatTime(meeting.scheduledAt)}</p></div>
                  <div><p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Timezone</p><p className="text-sm font-medium text-slate-900 mt-0.5">{meeting.timezone}</p></div>
                  <div><p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Duration</p><p className="text-sm font-medium text-slate-900 mt-0.5">{meeting.settings?.duration ? `${meeting.settings.duration} minutes` : (meeting.video?.durationFormatted || meeting.videoDuration || "Not set")}</p></div>
                </div>
                <div><p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Google Meet</p><a href={meeting.meetUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-600 mt-0.5 inline-block">{meeting.meetUrl}</a></div>
              </CardContent>
            </Card>

            <Card className="border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Presentation</CardTitle></CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-slate-100 flex items-center justify-center"><VideoIcon className="h-6 w-6 text-slate-400" /></div>
                  <div><p className="text-sm font-semibold text-slate-900">{meeting.video?.title || meeting.videoTitle || "No presentation selected"}</p><p className="text-xs text-slate-500 mt-0.5">{meeting.video?.durationFormatted || meeting.videoDuration || "Presentation video"}</p></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Execution Log</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-0 relative">
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200" />
                  {timeline.length ? timeline.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 relative">
                      <div className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${item.type === "success" ? "bg-green-100" : "bg-sky-50"}`}>
                        <div className={`h-2 w-2 rounded-full ${item.type === "success" ? "bg-green-500" : "bg-sky-500"}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">{item.event}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{formatTime(item.timestamp)}</p>
                      </div>
                    </div>
                  )) : <div className="detail-timeline-empty"><span className="app-status-dot" /><div><p>{status}</p><span>{formatDate(meeting.scheduledAt)} · {formatTime(meeting.scheduledAt)}</span></div></div>}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="border-slate-200/60">
              <CardHeader><CardTitle className="text-lg">Execution</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-slate-900">{meeting.status === "failed" ? "Agent needs attention" : `${status}${active ? " · waiting for scheduled time" : " successfully"}`}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-500"><span>Execution</span><span>{active ? "Scheduled" : "Finished"}</span></div>
                  <Progress value={active ? 12 : 100} className="h-1.5" />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Link href="/dashboard/meetings" className="w-full"><Button variant="outline" size="sm" className="w-full text-xs">All meetings</Button></Link>
                {meeting.meetUrl && <a href={meeting.meetUrl} target="_blank" rel="noreferrer" className="w-full"><Button size="sm" className="w-full text-xs">Open Google Meet</Button></a>}
              </CardFooter>
            </Card>

          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

export default function MeetingDetailPage() {
  return (
    <Suspense fallback={<DashboardShell><div className="flex items-center justify-center min-h-[40vh]"><p className="text-sm text-slate-500">Loading meeting details...</p></div></DashboardShell>}>
      <MeetingDetailContent />
    </Suspense>
  );
}
