"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, RefreshCw, Unlink } from "lucide-react";
import { getGoogleSession } from "@/lib/db";

export function GoogleSessionCard() {
  const session = getGoogleSession("user_1");
  return (
    <Card className="border-slate-200/60">
      <CardHeader>
        <CardTitle className="text-lg">Google Session</CardTitle>
        <CardDescription>Manage your Google account connection.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Google account</p>
            <p className="text-sm text-slate-500">Connected</p>
          </div>
          <Badge variant={session?.status === "connected" ? "success" : "neutral"}>
            {session?.status === "connected" ? "Connected" : "Disconnected"}
          </Badge>
        </div>
        <p className="text-xs text-slate-400">We never ask for your Google password.</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm">Re-authenticate</Button>
        <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Disconnect</Button>
      </CardFooter>
    </Card>
  );
}
