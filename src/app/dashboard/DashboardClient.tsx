"use client";

import React, { useState, useEffect, useCallback, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getDashboardStats, getAllMeetings, getAllVideos, getExecutionLog,
} from "@/lib/db";
import { formatDateTime, formatTime } from "@/lib/utils";
import { type ScheduledMeeting, type Video, type DashboardStats } from "@/types";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { SessionContext } from "@/components/layout/SessionProvider";

export function DashboardClient() {
  const router = useRouter();
  const { user } = useContext(SessionContext);
  const [stats, setStats] = useState<DashboardStats>({ upcoming: 0, today: 0, completed: 0, failed: 0 });
  const [meetings, setMeetings] = useState<ScheduledMeeting[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [recentEvents, setRecentEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [mRes, aRes] = await Promise.all([
        fetch("/api/meetings"),
        fetch("/api/activity").catch(() => null),
      ]);

      if (mRes.ok) {
        const data = await mRes.json();
        const allMeetings = data.meetings || [];
        setMeetings(allMeetings);

        const now = new Date();
        const upcoming = allMeetings.filter((m: any) => m.status === "scheduled" || m.status === "joining" || m.status === "launching").length;
        const completed = allMeetings.filter((m: any) => m.status === "completed").length;
        const failed = allMeetings.filter((m: any) => m.status === "failed").length;
        const today = allMeetings.filter((m: any) => new Date(m.scheduledAt).toDateString() === now.toDateString()).length;

        setStats({ upcoming, today, completed, failed });
      }

      if (aRes && aRes.ok) {
        const actData = await aRes.json();
        setRecentEvents((actData.events || []).slice(0, 5));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const upcomingMeetings = meetings.filter(
    (m) => ["scheduled", "starting_soon", "launching", "joining", "in_meeting", "presenting"].includes(m.status) &&
           new Date(m.scheduledAt).getTime() > Date.now() - 30 * 60 * 1000
  );
  const nextMeeting = [...upcomingMeetings].sort((a, b) => Date.parse(a.scheduledAt) - Date.parse(b.scheduledAt))[0];

  const statusLabel = (status: string) => status.replaceAll("_", " ");

  return (
    <DashboardShell>
      <div className="dashboard-overview">
        <div className="page-heading">
          <div>
            <div className="page-eyebrow">OVERVIEW</div>
            <h1>Good morning, {user?.name?.split(" ")[0] || "there"}</h1>
            <p>Here&apos;s what&apos;s happening with your meetings.</p>
          </div>
          <div className="page-heading__actions">
            <Button variant="outline" onClick={loadData}>Refresh</Button>
            <Button onClick={() => router.push("/dashboard/meetings/schedule")}><Plus className="h-4 w-4 mr-2" /> Schedule Meeting</Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="dashboard-metrics" aria-label="Meeting overview metrics">
          <div><span>Upcoming</span><strong>{stats.upcoming.toString().padStart(2, "0")}</strong></div>
          <div><span>Completed</span><strong>{stats.completed.toString().padStart(2, "0")}</strong></div>
          <div><span>Scheduled today</span><strong>{stats.today.toString().padStart(2, "0")}</strong></div>
        </div>

        {nextMeeting && <section className="next-meeting" aria-labelledby="next-meeting-title">
          <div className="next-meeting__label"><span className="app-status-dot" /> NEXT UP</div>
          <div className="next-meeting__body">
            <div>
              <h2 id="next-meeting-title">{nextMeeting.title}</h2>
              <p>{formatDateTime(nextMeeting.scheduledAt)} <span>·</span> Google Meet</p>
              <div className="next-meeting__video"><span className="mini-play" />{(nextMeeting as any).video?.title || nextMeeting.videoTitle || "No presentation selected"}</div>
            </div>
            <div className="next-meeting__actions">
              <span className="status-text"><span className="app-status-dot" />{statusLabel(nextMeeting.status)}</span>
              <Link href={`/dashboard/meetings/${nextMeeting.id}`} className="next-meeting__link">View meeting <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>}

        <div className="dashboard-lower-grid">
          <section className="dashboard-section">
            <div className="section-heading">
              <div><div className="page-eyebrow">YOUR SCHEDULE</div><h2>Upcoming meetings</h2></div>
              <Link href="/dashboard/meetings" className="text-link">View all <span aria-hidden="true">→</span></Link>
            </div>
          
          {loading ? (
            <div className="meeting-list" aria-label="Loading meetings">
              <div className="meeting-list__skeleton" /><div className="meeting-list__skeleton" />
            </div>
          ) : upcomingMeetings.length === 0 ? (
            <div className="empty-state">
              <h3>Your calendar is clear.</h3>
              <p>Schedule your first meeting and let your agent handle the rest.</p>
              <Button className="mt-4" onClick={() => router.push("/dashboard/meetings/schedule")}>Schedule Meeting</Button>
            </div>
          ) : (
            <div className="meeting-list">
              {upcomingMeetings.slice(0, 5).map((meeting) => (
                <Link key={meeting.id} href={`/dashboard/meetings/${meeting.id}`} className="meeting-list__row">
                  <div className="meeting-list__main"><strong>{meeting.title}</strong><span>{(meeting as any).video?.title || meeting.videoTitle || "No presentation"}</span></div>
                  <div className="meeting-list__date"><strong>{formatTime(meeting.scheduledAt)}</strong><span>{new Date(meeting.scheduledAt).toLocaleDateString("en", { month: "short", day: "numeric" })}</span></div>
                  <span className="status-text"><span className={meeting.status === "failed" ? "status-dot status-dot--error" : "app-status-dot"} />{statusLabel(meeting.status)}</span>
                </Link>
              ))}
            </div>
          )}
          </section>

          <section className="dashboard-section">
            <div className="section-heading"><div><div className="page-eyebrow">AGENT ACTIVITY</div><h2>Recent activity</h2></div><Link href="/dashboard/meetings" className="text-link">Meetings <span aria-hidden="true">→</span></Link></div>
            {recentEvents.length === 0 ? (
              <div className="empty-state empty-state--small">
                <p>Your agent&apos;s activity will appear here.</p>
              </div>
            ) : (
              <div className="activity-list">
                {recentEvents.map((event) => (
                  <div className="activity-list__row" key={event.id}>
                    <span className="activity-list__time">{formatTime(event.timestamp)}</span>
                    <span className="activity-list__marker" />
                    <div>
                      <strong>{event.event}</strong>
                      <span>{event.meetingTitle || event.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </DashboardShell>
  );
}
