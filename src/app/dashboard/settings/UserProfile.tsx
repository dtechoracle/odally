"use client";

import React from "react";
import { User, Globe, Bell, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function UserProfile() {
  return (
    <Card className="border-slate-200/60">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-sky-100 text-sky-700 text-xl">D</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">Demo User</CardTitle>
          <p className="text-sm text-slate-500">demo@meetingagent.com</p>
          <Badge variant="default" className="mt-1">Active</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <User className="h-4 w-4 text-slate-400" />
          <span className="text-slate-600">demo@meetingagent.com</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Globe className="h-4 w-4 text-slate-400" />
          <span className="text-slate-600">Africa/Lagos</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Bell className="h-4 w-4 text-slate-400" />
          <span className="text-slate-600">Notifications enabled</span>
        </div>
      </CardContent>
    </Card>
  );
}
