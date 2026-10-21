import { NextResponse, connection } from "next/server";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3, BUCKET_NAME } from "@/lib/s3";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET /api/videos - List all videos for the current user
export async function GET() {
  await connection();
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = user.id;

    const videos = await prisma.video.findMany({
      where: { userId },
      orderBy: { uploadedAt: "desc" },
    });

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}

// POST /api/videos - Get a presigned upload URL for a new video
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = user.id;

    const body = await request.json();
    const { filename, mimeType, size, title } = body;

    if (!filename || !mimeType || !size) {
      return NextResponse.json({ error: "filename, mimeType, and size are required" }, { status: 400 });
    }

    const videoId = uuidv4();
    const ext = filename.split(".").pop();
    const storageKey = `videos/${userId}/${videoId}.${ext}`;
    const thumbnailKey = `thumbnails/${userId}/${videoId}.jpg`;

    // Generate a presigned URL — client uploads directly to Neon storage
    const presignedUrl = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: storageKey,
        ContentType: mimeType,
      }),
      { 
        expiresIn: 3600,
        unhoistableHeaders: new Set(["x-amz-checksum-crc32", "x-amz-sdk-checksum-algorithm"]),
      }
    );

    // Create a placeholder video record in the DB
    const video = await prisma.video.create({
      data: {
        id: videoId,
        userId,
        filename,
        title: title || filename.replace(/\.[^/.]+$/, ""),
        duration: 0,
        durationFormatted: "0:00",
        mimeType,
        size,
        storageKey,
        thumbnailKey,
        status: "uploading",
      },
    });

    return NextResponse.json({
      video,
      presignedUrl,   // Client uses this URL to PUT the file directly
      storageKey,
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating video upload:", error);
    return NextResponse.json({ error: "Failed to create video upload" }, { status: 500 });
  }
}
