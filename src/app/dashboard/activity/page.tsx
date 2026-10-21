"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Loader2 } from "lucide-react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { Input } from "@/components/ui/input";
import { formatDate, formatTime } from "@/lib/utils";

const filters = ["All", "Meetings", "Presentations", "System", "Errors"];

interface ActivityEvent {
  id: string;
  meetingId: string;
  meetingTitle: string;
  timestamp: string;
  event: string;
  details?: string | null;
  type: string;
}

export default function ActivityPage() {
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const fetchActivity = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/activity");
      if (res.ok) {
        const data = await res.json();
        setEvents(data.events || []);
      }
    } catch (err) {
      console.error("Failed to fetch activity:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const filtered = events.filter((event) => {
    const search = `${event.event} ${event.meetingTitle} ${event.details || ""}`.toLowerCase();
    const categoryMatches =
      filter === "All" ||
      (filter === "Errors" && event.type === "error") ||
      (filter === "Presentations" && /present|video|playback/i.test(event.event)) ||
      (filter === "Meetings" && /join|meet|agent|launch|preparing|running/i.test(event.event)) ||
      (filter === "System" && !/present|video|playback|join|meet/i.test(event.event));
    return categoryMatches && search.includes(query.trim().toLowerCase());
  });

  const grouped = filtered.reduce<Record<string, typeof filtered>>((result, event) => {
    const day = formatDate(event.timestamp);
    (result[day] ||= []).push(event);
    return result;
  }, {});

  return (
    <DashboardShell>
      <div className="activity-page">
        <div className="page-heading">
          <div>
            <div className="page-eyebrow">RECORD</div>
            <h1>Activity</h1>
            <p>A chronological record of what your agent has done.</p>
          </div>
        </div>

        <div className="activity-toolbar">
          <div className="meetings-filters" role="group" aria-label="Filter activity">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={`meetings-filter${filter === item ? " is-active" : ""}`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="meetings-search">
            <Search aria-hidden="true" />
            <Input
              aria-label="Search activity"
              placeholder="Search activity..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-slate-500 gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-sky-500" />
            <p className="text-sm font-medium">Loading activity events...</p>
          </div>
        ) : Object.keys(grouped).length ? (
          <div className="activity-timeline">
            {Object.entries(grouped).map(([day, dayEvents]) => (
              <section className="activity-timeline__day" key={day}>
                <h2>{day}</h2>
                <div className="activity-timeline__events">
                  {dayEvents.map((event) => (
                    <article className="activity-timeline__event" key={event.id}>
                      <time>{formatTime(event.timestamp)}</time>
                      <span
                        className={`activity-timeline__dot${
                          event.type === "error"
                            ? " is-error"
                            : event.type === "success"
                            ? " is-success"
                            : ""
                        }`}
                      />
                      <div>
                        <strong>{event.event}</strong>
                        <Link href={`/dashboard/meetings/${event.meetingId}`}>
                          {event.meetingTitle}
                        </Link>
                        {event.details && <p>{event.details}</p>}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="activity-empty">
            <h2>{events.length ? "No activity matches your search." : "No activity yet."}</h2>
            <p>Your agent&apos;s actions and logs will appear here after meetings run.</p>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
