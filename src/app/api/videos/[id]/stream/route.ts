import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3, BUCKET_NAME } from "@/lib/s3";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> | { id: string } }) {
  try {
    const { id } = await Promise.resolve(params);
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    const authHeader = request.headers.get("authorization");
    const isWorker =
      authHeader === `Bearer ${process.env.WORKER_SECRET || "dev-secret-key"}` ||
      token === (process.env.WORKER_SECRET || "dev-secret-key");

    let video;
    if (isWorker) {
      video = await prisma.video.findUnique({ where: { id } });
      if (!video) return new NextResponse("Not Found", { status: 404 });
    } else {
      const session = await getServerSession(authOptions);
      if (!session?.user?.email) return new NextResponse("Unauthorized", { status: 401 });
      const user = await prisma.user.findUnique({ where: { email: session.user.email } });
      if (!user) return new NextResponse("Unauthorized", { status: 401 });

      video = await prisma.video.findUnique({ where: { id } });
      if (!video || video.userId !== user.id) return new NextResponse("Not Found", { status: 404 });
    }

    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: video.storageKey,
    });

    const s3Response = await s3.send(command);
    
    // Convert Node.js readable stream to Web stream for Next.js response
    const stream = s3Response.Body;
    
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    if (s3Response.ContentType) headers.set("Content-Type", s3Response.ContentType);
    if (s3Response.ContentLength) headers.set("Content-Length", s3Response.ContentLength.toString());
    headers.set("Accept-Ranges", "bytes");

    return new Response(stream as any, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error streaming video:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
