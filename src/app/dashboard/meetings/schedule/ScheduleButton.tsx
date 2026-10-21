"use client";

import React from "react";
import Link from "next/link";
import { Calendar as CalendarIcon, Clock, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { format, formatDistanceToNow } from "date-fns";

export default function ScheduleButton() {
  return (
    <Link href="/dashboard/meetings/schedule">
      <Button className="bg-sky-500 hover:bg-sky-600">
        <span className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" /> Schedule Meeting
        </span>
      </Button>
    </Link>
  );
}
