"use client";

import React from "react";
import Link from "next/link";
import { Play, Clock, Video as VideoIcon, MoreHorizontal, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, formatTime } from "@/lib/utils";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MeetingCardProps {
  title?: string;
  time?: string;
  status?: string;
  video?: string;
  compact?: boolean;
  meetingId?: string;
}

const statusConfig: Record<string, { badge: string; label: string }> = {
  scheduled: { badge: "neutral", label: "Scheduled" },
  starting_soon: { badge: "warning", label: "Starting Soon" },
  launching: { badge: "warning", label: "Launching" },
  joining: { badge: "warning", label: "Joining" },
  in_meeting: { badge: "success", label: "In Meeting" },
  presenting: { badge: "success", label: "Presenting" },
  playing: { badge: "success", label: "Playing" },
  monitoring: { badge: "success", label: "Monitoring" },
  completed: { badge: "success", label: "Completed" },
  failed: { badge: "error", label: "Failed" },
  cancelled: { badge: "neutral", label: "Cancelled" },
  running: { badge: "default", label: "Running" },
};

export function MeetingCard({
  title = "Product Demo",
  time = "2:00 PM",
  status = "scheduled",
  video = "Product Demo.mp4",
  compact = false,
  meetingId,
}: MeetingCardProps) {
  const sc = statusConfig[status] || statusConfig.scheduled;

  if (compact) {
    return (
      <Card className="border-slate-200/60">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
            <VideoIcon className="h-4 w-4 text-sky-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">{title}</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="h-3 w-3" /> {time}
            </div>
          </div>
          <Badge variant={sc.badge as any}>{sc.label}</Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-slate-200/60 hover:border-sky-200 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {time}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Today</span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {meetingId && <DropdownMenuItem asChild><Link href={`/dashboard/meetings/${meetingId}`}>View Details</Link></DropdownMenuItem>}
              {meetingId && <DropdownMenuItem asChild><Link href={`/dashboard/meetings/${meetingId}/edit`}>Edit</Link></DropdownMenuItem>}
              <DropdownMenuItem>Run Now</DropdownMenuItem>
              <DropdownMenuItem>Cancel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-sky-100 flex items-center justify-center">
            <VideoIcon className="h-3 w-3 text-sky-600" />
          </div>
          <span className="text-xs text-slate-500">{video}</span>
        </div>
        <div className="flex items-center justify-between">
          <Badge variant={sc.badge as any}>{sc.label}</Badge>
          {status === "scheduled" && (
            <Button size="sm" className="h-7 text-xs">
              <Play className="h-3 w-3 mr-1" /> Run Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
