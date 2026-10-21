import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3, BUCKET_NAME } from "@/lib/s3";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const user = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const userId = user.id;

    // Read query params
    const url = new URL(request.url);
    const filename = url.searchParams.get("filename");
    const mimeType = url.searchParams.get("mimeType");
    const size = parseInt(url.searchParams.get("size") || "0");
    const title = url.searchParams.get("title");
    const durationStr = url.searchParams.get("duration") || "0";
    const duration = parseFloat(durationStr);
    const durationFormatted = url.searchParams.get("durationFormatted") || "0:00";
    const width = parseInt(url.searchParams.get("width") || "0");
    const height = parseInt(url.searchParams.get("height") || "0");

    if (!filename || !mimeType || !request.body) {
      return NextResponse.json({ error: "filename, mimeType, and body are required" }, { status: 400 });
    }

    const videoId = uuidv4();
    const ext = filename.split(".").pop();
    const storageKey = `videos/${userId}/${videoId}.${ext}`;
    const thumbnailKey = `thumbnails/${userId}/${videoId}.jpg`;

    // Convert Web Stream to Buffer (Next.js request.body stream often lacks length for S3 PutObject)
    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload directly to Neon S3
    await s3.send(new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: storageKey,
      ContentType: mimeType,
      ContentLength: buffer.length,
      Body: buffer,
    }));

    // Save to database
    const video = await prisma.video.create({
      data: {
        id: videoId,
        userId,
        filename,
        title: title || filename.replace(/\.[^/.]+$/, ""),
        duration,
        durationFormatted,
        width: width > 0 ? width : undefined,
        height: height > 0 ? height : undefined,
        mimeType,
        size,
        storageKey,
        thumbnailKey,
        status: "ready", // ready immediately since it's uploaded directly
      },
    });

    return NextResponse.json({ video }, { status: 201 });
  } catch (error) {
    console.error("Error direct uploading video:", error);
    return NextResponse.json({ error: "Failed to upload video" }, { status: 500 });
  }
}
