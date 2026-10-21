import {
  ScheduledMeeting, Video, User, GoogleSession,
  ExecutionLog, ExecutionEvent, Notification, DashboardStats, MeetingStatus,
} from "@/types";

// ==================== MOCK DATA ====================
let users: User[] = [
  { id: "user_1", name: "Demo User", email: "demo@meetingagent.com", timezone: "Africa/Lagos", createdAt: new Date().toISOString() },
];

let videos: Video[] = [
  { id: "video_1", userId: "user_1", filename: "product-demo.mp4", title: "Product Demo", duration: 151, durationFormatted: "2:31", mimeType: "video/mp4", size: 15728640, width: 1920, height: 1080, storageKey: "videos/user_1/product-demo.mp4", thumbnailKey: "thumbnails/user_1/product-demo.jpg", status: "ready", uploadedAt: "2026-10-04T10:00:00Z" },
  { id: "video_2", userId: "user_1", filename: "company-intro.mp4", title: "Company Introduction", duration: 252, durationFormatted: "4:12", mimeType: "video/mp4", size: 26542080, width: 1920, height: 1080, storageKey: "videos/user_1/company-intro.mp4", thumbnailKey: "thumbnails/user_1/company-intro.jpg", status: "ready", uploadedAt: "2026-10-01T10:00:00Z" },
  { id: "video_3", userId: "user_1", filename: "sales-presentation.mp4", title: "Sales Presentation", duration: 501, durationFormatted: "8:21", mimeType: "video/mp4", size: 52428800, width: 1920, height: 1080, storageKey: "videos/user_1/sales-presentation.mp4", thumbnailKey: "thumbnails/user_1/sales-presentation.jpg", status: "ready", uploadedAt: "2025-09-28T10:00:00Z" },
];

let meetings: ScheduledMeeting[] = [
  { id: "meeting_1", title: "Product Demo", meetUrl: "https://meet.google.com/abc-defg-hij", scheduledAt: "2026-10-12T14:00:00Z", timezone: "Africa/Lagos", videoId: "video_1", status: "scheduled", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: true, playMode: "once", joinBehavior: "immediately", presentationMode: "present_video", leaveAfterVideo: true }, videoTitle: "Product Demo", videoDuration: "2:31", createdAt: "2026-10-04T10:00:00Z", updatedAt: "2026-10-04T10:00:00Z" },
  { id: "meeting_2", title: "Team Presentation", meetUrl: "https://meet.google.com/klm-nopq-rst", scheduledAt: "2026-10-13T17:30:00Z", timezone: "Africa/Lagos", videoId: "video_2", status: "scheduled", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: true, playMode: "once", joinBehavior: "wait_host", presentationMode: "present_after_joining", leaveAfterVideo: true }, videoTitle: "Company Introduction", videoDuration: "4:12", createdAt: "2026-10-05T10:00:00Z", updatedAt: "2026-10-05T10:00:00Z" },
  { id: "meeting_3", title: "Client Review", meetUrl: "https://meet.google.com/uvw-xyz-abcd", scheduledAt: "2026-10-07T10:00:00Z", timezone: "Africa/Lagos", videoId: "video_3", status: "starting_soon", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: true, playMode: "once", joinBehavior: "immediately", presentationMode: "present_video", leaveAfterVideo: false, duration: 60 }, videoTitle: "Sales Presentation", videoDuration: "8:21", createdAt: "2026-10-01T10:00:00Z", updatedAt: "2026-10-06T10:00:00Z" },
  { id: "meeting_4", title: "Quarterly Review", meetUrl: "https://meet.google.com/efg-hij-klm", scheduledAt: "2026-10-05T09:00:00Z", timezone: "Africa/Lagos", videoId: "video_1", status: "completed", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: true, playMode: "once", joinBehavior: "immediately", presentationMode: "present_video", leaveAfterVideo: true }, videoTitle: "Product Demo", videoDuration: "2:31", createdAt: "2026-09-30T10:00:00Z", updatedAt: "2026-10-05T11:00:00Z" },
  { id: "meeting_5", title: "Weekly Standup", meetUrl: "https://meet.google.com/nop-qrs-tuv", scheduledAt: "2026-10-03T14:00:00Z", timezone: "Africa/Lagos", videoId: "video_2", status: "completed", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: false, playMode: "once", joinBehavior: "immediately", presentationMode: "join_only", leaveAfterVideo: true }, videoTitle: "Company Introduction", videoDuration: "4:12", createdAt: "2026-09-29T10:00:00Z", updatedAt: "2026-10-03T15:00:00Z" },
  { id: "meeting_6", title: "Investor Pitch", meetUrl: "https://meet.google.com/wxy-zab-cde", scheduledAt: "2026-10-02T11:00:00Z", timezone: "Africa/Lagos", videoId: "video_3", status: "completed", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: true, playMode: "once", joinBehavior: "immediately", presentationMode: "present_video", leaveAfterVideo: true }, videoTitle: "Sales Presentation", videoDuration: "8:21", createdAt: "2026-09-28T10:00:00Z", updatedAt: "2026-10-02T12:00:00Z" },
  { id: "meeting_7", title: "Demo Call", meetUrl: "https://meet.google.com/fgh-ijk-lmn", scheduledAt: "2026-09-29T15:00:00Z", timezone: "Africa/Lagos", videoId: "video_1", status: "completed", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: true, playMode: "once", joinBehavior: "immediately", presentationMode: "present_video", leaveAfterVideo: true }, videoTitle: "Product Demo", videoDuration: "2:31", createdAt: "2026-09-25T10:00:00Z", updatedAt: "2026-09-29T16:00:00Z" },
  { id: "meeting_8", title: "Internal Review", meetUrl: "https://meet.google.com/opq-rst-uvw", scheduledAt: "2026-10-01T13:00:00Z", timezone: "Africa/Lagos", videoId: "video_2", status: "completed", settings: { cameraEnabled: false, microphoneEnabled: false, presentationEnabled: true, playMode: "once", joinBehavior: "immediately", presentationMode: "present_video", leaveAfterVideo: true }, videoTitle: "Company Introduction", videoDuration: "4:12", createdAt: "2026-09-27T10:00:00Z", updatedAt: "2026-10-01T14:00:00Z" },
];

let executionLogs: ExecutionLog[] = [
  { id: "log_1", meetingId: "meeting_4", status: "completed", startedAt: "2026-10-05T09:00:00Z", completedAt: "2026-10-05T09:05:00Z", events: [
    { id: "ev_1", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:00Z", event: "Agent launched", type: "info" },
    { id: "ev_2", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:03Z", event: "Google Meet opened", type: "info" },
    { id: "ev_3", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:08Z", event: "Pre-join screen detected", type: "info" },
    { id: "ev_4", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:10Z", event: "Microphone disabled", type: "info" },
    { id: "ev_5", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:10Z", event: "Camera disabled", type: "info" },
    { id: "ev_6", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:15Z", event: "Joined meeting", type: "success" },
    { id: "ev_7", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:18Z", event: "Presentation started", type: "success" },
    { id: "ev_8", meetingId: "meeting_4", timestamp: "2026-10-05T09:00:20Z", event: "Video playback started", type: "info" },
    { id: "ev_9", meetingId: "meeting_4", timestamp: "2026-10-05T09:02:45Z", event: "Video completed", type: "success" },
    { id: "ev_10", meetingId: "meeting_4", timestamp: "2026-10-05T09:02:47Z", event: "Presentation stopped", type: "info" },
    { id: "ev_11", meetingId: "meeting_4", timestamp: "2026-10-05T09:02:49Z", event: "Agent left meeting", type: "info" },
  ]},
];

let notifications: Notification[] = [
  { id: "notif_1", userId: "user_1", title: "Odally scheduled", message: "Product Demo scheduled for October 12 at 2:00 PM", type: "info", read: false, createdAt: "2026-10-04T10:00:00Z" },
  { id: "notif_2", userId: "user_1", title: "Meeting completed", message: "Quarterly Review completed successfully", type: "success", read: false, createdAt: "2026-10-05T11:00:00Z" },
];

let googleSessions: GoogleSession[] = [
  { id: "gsess_1", userId: "user_1", status: "connected", connectedAt: "2026-10-01T10:00:00Z", expiresAt: "2027-10-01T10:00:00Z" },
];

function now(): string { return new Date().toISOString(); }

// ==================== USER ====================
export function getUserById(id: string): User | undefined { return users.find((u) => u.id === id); }
export function getUserByEmail(email: string): User | undefined { return users.find((u) => u.email === email); }
export function createUser(data: Omit<User, "id" | "createdAt">): User {
  const user: User = { ...data, id: `user_${Date.now()}`, createdAt: now() };
  users.push(user);
  return user;
}

// ==================== VIDEO ====================
export function getAllVideos(userId: string): Video[] { return videos.filter((v) => v.userId === userId); }
export function getVideoById(id: string): Video | undefined { return videos.find((v) => v.id === id); }
export function getVideoByMeetingId(meetingId: string): Video | undefined {
  const m = meetings.find((m) => m.id === meetingId);
  return m?.videoId ? videos.find((v) => v.id === m.videoId) : undefined;
}
export function createVideo(data: Omit<Video, "id" | "status" | "uploadedAt">): Video {
  const video: Video = { ...data, id: `video_${Date.now()}`, status: "uploading", uploadedAt: now() };
  videos.push(video);
  return video;
}
export function updateVideo(id: string, data: Partial<Video>): Video | undefined {
  const idx = videos.findIndex((v) => v.id === id);
  if (idx === -1) return undefined;
  videos[idx] = { ...videos[idx], ...data };
  return videos[idx];
}
export function deleteVideo(id: string): boolean {
  const idx = videos.findIndex((v) => v.id === id);
  if (idx === -1) return false;
  videos.splice(idx, 1);
  return true;
}

// ==================== MEETINGS ====================
export function getAllMeetings(): ScheduledMeeting[] { return meetings; }
export function getMeetingById(id: string): ScheduledMeeting | undefined { return meetings.find((m) => m.id === id); }
export function createMeeting(data: Omit<ScheduledMeeting, "id" | "status" | "createdAt" | "updatedAt">): ScheduledMeeting {
  const meeting: ScheduledMeeting = { ...data, id: `meeting_${Date.now()}`, status: "scheduled", createdAt: now(), updatedAt: now() };
  meetings.push(meeting);
  return meeting;
}
export function updateMeeting(id: string, data: Partial<ScheduledMeeting>): ScheduledMeeting | undefined {
  const idx = meetings.findIndex((m) => m.id === id);
  if (idx === -1) return undefined;
  meetings[idx] = { ...meetings[idx], ...data, updatedAt: now() };
  return meetings[idx];
}
export function updateMeetingStatus(id: string, status: MeetingStatus): ScheduledMeeting | undefined {
  const idx = meetings.findIndex((m) => m.id === id);
  if (idx === -1) return undefined;
  meetings[idx] = { ...meetings[idx], status, updatedAt: now() };
  return meetings[idx];
}
export function deleteMeeting(id: string): boolean {
  const idx = meetings.findIndex((m) => m.id === id);
  if (idx === -1) return false;
  meetings.splice(idx, 1);
  return true;
}

// ==================== DASHBOARD ====================
export function getDashboardStats(): DashboardStats {
  const nowUTC = new Date();
  const todayStart = new Date(nowUTC.getFullYear(), nowUTC.getMonth(), nowUTC.getDate()).toISOString();
  const todayEnd = new Date(nowUTC.getFullYear(), nowUTC.getMonth(), nowUTC.getDate() + 1).toISOString();
  return {
    upcoming: meetings.filter((m) => ["scheduled", "starting_soon", "launching", "joining"].includes(m.status)).length,
    today: meetings.filter((m) => m.scheduledAt >= todayStart && m.scheduledAt < todayEnd).length,
    completed: meetings.filter((m) => m.status === "completed").length,
    failed: meetings.filter((m) => m.status === "failed").length,
  };
}

// ==================== EXECUTION ====================
export function getExecutionLog(meetingId: string): ExecutionLog | undefined { return executionLogs.find((l) => l.meetingId === meetingId); }
export function getAllExecutionLogs(): ExecutionLog[] { return executionLogs; }
export function createExecutionLog(data: Omit<ExecutionLog, "id">): ExecutionLog {
  const log: ExecutionLog = { ...data, id: `log_${Date.now()}` };
  executionLogs.push(log);
  return log;
}
export function addEventToLog(meetingId: string, event: Omit<ExecutionEvent, "id">): ExecutionLog | undefined {
  const log = executionLogs.find((l) => l.meetingId === meetingId);
  if (!log) return undefined;
  log.events.push({ ...event, id: `ev_${Date.now()}` });
  return log;
}
export function updateExecutionLogStatus(meetingId: string, status: MeetingStatus): ExecutionLog | undefined {
  const log = executionLogs.find((l) => l.meetingId === meetingId);
  if (!log) return undefined;
  log.status = status;
  return log;
}

// ==================== NOTIFICATIONS ====================
export function getNotifications(userId: string): Notification[] { return notifications.filter((n) => n.userId === userId); }
export function createNotification(data: Omit<Notification, "id" | "read" | "createdAt">): Notification {
  const notif: Notification = { ...data, id: `notif_${Date.now()}`, read: false, createdAt: now() };
  notifications.push(notif);
  return notif;
}
export function markNotificationRead(id: string): boolean {
  const n = notifications.find((n) => n.id === id);
  if (!n) return false;
  n.read = true;
  return true;
}

// ==================== GOOGLE SESSION ====================
export function getGoogleSession(userId: string): GoogleSession | undefined { return googleSessions.find((g) => g.userId === userId); }
export function updateGoogleSession(userId: string, data: Partial<GoogleSession>): GoogleSession | undefined {
  const s = googleSessions.find((g) => g.userId === userId);
  if (!s) return undefined;
  Object.assign(s, data);
  return s;
}

// ==================== CALENDAR ====================
export function getMeetingsForDate(dateStr: string): ScheduledMeeting[] {
  return meetings.filter((m) => {
    const d = new Date(m.scheduledAt);
    const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return date === dateStr;
  });
}

// ==================== UTILITY ====================
export { cn } from "@/lib/utils";
export { formatDuration } from "@/lib/utils";
