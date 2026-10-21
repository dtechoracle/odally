"use client";

import React from "react";
import { Video as VideoIcon } from "lucide-react";

export function VideoThumbnail({ width, height, duration, title }: { width?: number; height?: number; duration?: string; title?: string }) {
  return (
    <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
      <VideoIcon className="h-8 w-8 text-slate-300" />
      {duration && (
        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
          {duration}
        </span>
      )}
      {width && (
        <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
          {width}×{height || 1080}
        </span>
      )}
    </div>
  );
}
