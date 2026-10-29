import { NextResponse } from "next/server";
import { PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3, BUCKET_NAME } from "@/lib/s3";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const filename = url.searchParams.get("filename");
    const mimeType = url.searchParams.get("mimeType") || "application/octet-stream";

    if (!filename || !request.body) {
      return NextResponse.json(
        { error: "filename and body are required" },
        { status: 400 }
      );
    }

    const docId = uuidv4();
    const ext = filename.split(".").pop() || "txt";
    const storageKey = `documents/${user.id}/${docId}.${ext}`;

    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload document to S3
    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: storageKey,
        ContentType: mimeType,
        ContentLength: buffer.length,
        Body: buffer,
      })
    );

    // Get signed URL valid for 7 days
    const downloadUrl = await getSignedUrl(
      s3,
      new GetObjectCommand({ Bucket: BUCKET_NAME, Key: storageKey }),
      { expiresIn: 604800 }
    );

    // If it's plain text or markdown, decode simple text
    let extractedText = "";
    if (
      mimeType.startsWith("text/") ||
      filename.endsWith(".txt") ||
      filename.endsWith(".md")
    ) {
      extractedText = buffer.toString("utf-8");
    }

    return NextResponse.json({
      success: true,
      document: {
        id: docId,
        filename,
        storageKey,
        url: downloadUrl,
        size: buffer.length,
        extractedText,
      },
    });
  } catch (error) {
    console.error("Error uploading document:", error);
    return NextResponse.json(
      { error: "Failed to upload document" },
      { status: 500 }
    );
  }
}
