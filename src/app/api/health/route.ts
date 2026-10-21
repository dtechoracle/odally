import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    return NextResponse.json({ id, name: "Odally API" });
  }

  return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });
}
