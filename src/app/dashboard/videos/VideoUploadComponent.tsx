"use client";

import React from "react";
import { Video as VideoIcon } from "lucide-react";

export default function VideoUploadComponent() {
  return (
    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-sky-300 transition-colors">
      <VideoIcon className="h-8 w-8 text-slate-400 mx-auto mb-2" />
      <p className="text-sm text-slate-600">Drag and drop or browse</p>
      <p className="text-xs text-slate-400 mt-1">MP4, WebM, MOV up to 500MB</p>
    </div>
  );
}
