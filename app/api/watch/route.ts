import { NextRequest, NextResponse } from "next/server";
import Innertube, { ClientType } from "youtubei.js/web";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("videoId");
  if (!videoId) return NextResponse.json({ error: "Missing videoId" });
  const innertube = await Innertube.create({
    location: "ID",
    cookie: "VISITOR_PRIVACY_METADATA:CgJJRBIEGgAgGg%3D%3D;",
    retrieve_player: true,
    visitor_data: "CgJJRBIEGgAgGg%3D%3D",
  });

  const response = await innertube.getInfo(videoId, "ANDROID");
  return NextResponse.json(response);
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.searchParams.get("videoId");
  if (!id) return NextResponse.json({ error: "Missing ID" });

  const response = await fetch(`https://pipedapi.reallyaweso.me/streams/${id}`);
  if (!response.ok) {
    return NextResponse.json({ error: response.status });
  }

  const data = await response.json();
  if (!data) return NextResponse.json({ error: response.status });
  const stream = data?.audioStreams?.filter((data: any) => data?.itag === 251);
  return NextResponse.json(stream[0]?.url);
}
