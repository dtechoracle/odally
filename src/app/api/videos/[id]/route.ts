import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3, BUCKET_NAME } from "@/lib/s3";
import { prisma } from "@/lib/prisma";

// PATCH /api/videos/[id] - Update video record after upload completes
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);
    const body = await request.json();
    const { duration, durationFormatted, width, height } = body;

    const video = await prisma.video.update({
      where: { id },
      data: {
        duration: duration || 0,
        durationFormatted: durationFormatted || "0:00",
        width,
        height,
        status: "ready",
      },
    });

    return NextResponse.json({ video });
  } catch (error) {
    console.error("Error updating video:", error);
    return NextResponse.json({ error: "Failed to update video" }, { status: 500 });
  }
}

// GET /api/videos/[id] - Get a video's presigned download URL
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const { id } = await Promise.resolve(params);
    const video = await prisma.video.findUnique({ where: { id } });
    if (!video) return NextResponse.json({ error: "Video not found" }, { status: 404 });

    const url = await getSignedUrl(
      s3,
      new GetObjectCommand({ Bucket: BUCKET_NAME, Key: video.storageKey }),
      { expiresIn: 3600 }
    );

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error getting video URL:", error);
    return NextResponse.json({ error: "Failed to get video URL" }, { status: 500 });
  }
}
