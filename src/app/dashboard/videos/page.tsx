"use client";

import React, { useRef, useState } from "react";
import { Upload, Video as VideoIcon, FileVideo, X, Play, Trash2, Edit3, Clock, MoreHorizontal, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogFooter,
} from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { cn, formatTime } from "@/lib/utils";
import { type Video } from "@/types";
import { getAllVideos, getVideoById, deleteVideo as dbDeleteVideo } from "@/lib/db";
import { DashboardShell } from "@/components/layout/DashboardShell";

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

export default function VideosPage() {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const [videos, setVideos] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewVideo, setPreviewVideo] = useState<any | null>(null);

  React.useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/videos");
      if (res.ok) {
        const data = await res.json();
        setVideos(data.videos || []);
      }
    } catch (e) { console.error(e); }
  };

  const handleFile = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(10);

    try {
      // Extract video duration and resolution
      const videoEl = document.createElement('video');
      videoEl.preload = 'metadata';
      const fileUrl = URL.createObjectURL(file);
      
      await new Promise<void>((resolve, reject) => {
        videoEl.onloadedmetadata = () => resolve();
        videoEl.onerror = () => reject(new Error("Invalid video file"));
        videoEl.src = fileUrl;
      });

      const duration = videoEl.duration;
      const width = videoEl.videoWidth;
      const height = videoEl.videoHeight;
      const m = Math.floor(duration / 60);
      const s = Math.floor(duration % 60);
      const durationFormatted = `${m}:${s.toString().padStart(2, '0')}`;
      URL.revokeObjectURL(fileUrl);
      setUploadProgress(20);

      // Stream to our Next.js API
      const uploadUrl = `/api/videos/upload?filename=${encodeURIComponent(file.name)}&mimeType=${encodeURIComponent(file.type)}&size=${file.size}&duration=${duration}&durationFormatted=${encodeURIComponent(durationFormatted)}&width=${width}&height=${height}`;
      const uploadRes = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file, // Streams directly to the backend
      });

      if (!uploadRes.ok) throw new Error("Upload failed: " + await uploadRes.text());
      setUploadProgress(100);
      setTimeout(() => { setIsUploading(false); setUploadProgress(0); fetchVideos(); }, 1000);
    } catch (error) {
      console.error(error);
      alert("Failed to upload video");
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string) => {
    dbDeleteVideo(id);
    setVideos(getAllVideos("user_1"));
  };

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Presentation Library</h1>
            <p className="text-sm text-slate-500 mt-1">Manage everything your agent can present.</p>
          </div>
          <Label className="cursor-pointer">
            <Button size="sm" className="bg-sky-500 shadow-sm shadow-sky-200"><Upload className="h-3.5 w-3.5 mr-1.5" /> Upload Video</Button>
            <Input ref={uploadInputRef} type="file" accept="video/mp4,video/webm,video/quicktime" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
          </Label>
        </div>

        {isUploading && (
          <Card className="border-sky-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Upload className="h-5 w-5 text-sky-500 animate-bounce" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Uploading video...</p>
                  <Progress value={Math.min(uploadProgress, 100)} className="mt-2" />
                </div>
                <span className="text-xs text-slate-500">{Math.round(Math.min(uploadProgress, 100))}%</span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-sky-300 hover:bg-sky-50/30 transition-all">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100"><FileVideo className="h-6 w-6 text-slate-400" /></div>
            <div>
                  <p className="text-sm font-medium text-slate-900">Drop your presentation here</p>
                  <p className="text-xs text-slate-500 mt-1">MP4, MOV, or WebM up to 500MB</p>
            </div>
                <Button variant="outline" size="sm" className="mt-1" onClick={() => uploadInputRef.current?.click()}>Browse Files</Button>
          </div>
        </div>

        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="border-slate-200/60 overflow-hidden group hover:shadow-sm transition-shadow">
                <div className="relative h-40 bg-slate-100 flex items-center justify-center overflow-hidden">
                  <VideoIcon className="h-10 w-10 text-slate-200" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center"><Play className="h-4 w-4 text-slate-700 ml-0.5" /></div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">{video.durationFormatted}</span>
                  {video.width && <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">{video.width}×{video.height}</span>}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 bg-white/80"><Edit3 className="h-3 w-3" /></Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild><Button variant="ghost" size="sm" className="h-7 w-7 p-0 bg-white/80 hover:bg-white"><Trash2 className="h-3 w-3" /></Button></AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogTitle>Delete video?</AlertDialogTitle>
                        <AlertDialogDescription>This will permanently delete &quot;{video.title}&quot;.</AlertDialogDescription>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(video.id)} className="bg-red-500 hover:bg-red-600">Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
                <CardContent className="pt-3 pb-3">
                  <h3 className="text-sm font-semibold text-slate-900 truncate">{video.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{video.durationFormatted} • {video.width ? `${video.width} × ${video.height}` : "—"} • {formatFileSize(video.size)}</p>
                </CardContent>
                <CardFooter className="pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs" onClick={() => setPreviewVideo(video)}>Preview</Button>
                  <Button size="sm" className="flex-1 text-xs bg-sky-500 hover:bg-sky-600">Schedule</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-dashed border-slate-300">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <VideoIcon className="h-10 w-10 text-slate-300 mb-3" />
              <p className="text-sm text-slate-500">No videos yet. Upload one to get started.</p>
            </CardContent>
          </Card>
        )}

        <Dialog open={!!previewVideo} onOpenChange={() => setPreviewVideo(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader><DialogTitle>{previewVideo?.title}</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="aspect-video rounded-lg bg-black flex items-center justify-center overflow-hidden">
                {previewVideo ? (
                  <video 
                    controls 
                    autoPlay 
                    src={`/api/videos/${previewVideo.id}/stream`} 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <VideoIcon className="h-16 w-16 text-slate-200" />
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><p className="text-xs text-slate-500">Duration</p><p className="font-medium">{previewVideo?.durationFormatted}</p></div>
                <div><p className="text-xs text-slate-500">Resolution</p><p className="font-medium">{previewVideo?.width ? `${previewVideo.width} × ${previewVideo.height}` : "—"}</p></div>
                <div><p className="text-xs text-slate-500">File Size</p><p className="font-medium">{previewVideo && formatFileSize(previewVideo.size)}</p></div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardShell>
  );
}
