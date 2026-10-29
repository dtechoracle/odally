export type MeetingStatus =
  | "scheduled"
  | "starting_soon"
  | "launching"
  | "joining"
  | "in_meeting"
  | "presenting"
  | "playing"
  | "monitoring"
  | "completed"
  | "failed"
  | "cancelled"
  | "running";

export type PlayMode = "once" | "loop";
export type JoinBehavior = "immediately" | "wait_host" | "wait_admitted";
export type PresentationMode = "present_video" | "join_only" | "present_after_joining";
export type LeaveAfter = "video_ends" | "specified_duration" | "manual" | "custom";
export type VideoStatus = "uploading" | "processing" | "ready" | "failed";

export interface MeetingSettings {
  cameraEnabled: boolean;
  microphoneEnabled: boolean;
  presentationEnabled: boolean;
  playMode: PlayMode;
  joinBehavior: JoinBehavior;
  presentationMode: PresentationMode;
  duration?: number;
  leaveAfterVideo: boolean;
  leaveAfterDuration?: number;
}

export interface ScheduledMeeting {
  id: string;
  title: string;
  meetUrl: string;
  scheduledAt: string;
  timezone: string;
  videoId: string | null;
  status: MeetingStatus;
  settings: MeetingSettings;
  videoTitle?: string;
  videoDuration?: string;
  materialType?: "video" | "document" | "notes" | "none";
  documentUrl?: string | null;
  documentName?: string | null;
  talkingPoints?: string | null;
  introMessage?: string | null;
  keywordAlerts?: string | null;
  summary?: string | null;
  mentions?: string | null;
  attendeeQuestions?: string | null;
  followUpDraft?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Video {
  id: string;
  userId: string;
  filename: string;
  title: string;
  duration: number;
  durationFormatted: string;
  mimeType: string;
  size: number;
  width?: number;
  height?: number;
  storageKey: string;
  thumbnailKey: string;
  thumbnailUrl?: string;
  status: VideoStatus;
  url?: string;
  uploadedAt: string;
}

export interface ExecutionEvent {
  id: string;
  meetingId: string;
  timestamp: string;
  event: string;
  details?: string;
  type: "info" | "success" | "warning" | "error";
}

export interface ExecutionLog {
  id: string;
  meetingId: string;
  status: MeetingStatus;
  startedAt?: string;
  completedAt?: string;
  events: ExecutionEvent[];
  errorMessage?: string;
  diagnostics?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  timezone: string;
  createdAt: string;
}

export interface GoogleSession {
  id: string;
  userId: string;
  status: "connected" | "disconnected" | "expired";
  sessionData?: string;
  connectedAt?: string;
  expiresAt?: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "error" | "warning";
  read: boolean;
  createdAt: string;
}

export interface DashboardStats {
  upcoming: number;
  today: number;
  completed: number;
  failed: number;
}
