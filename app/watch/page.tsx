import React from "react";
import { getVideo } from "../music";

export default async function page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { videoId } = searchParams ?? { videoId: "" };
  console.log(videoId);
  if (typeof videoId !== "string") return <p>Invalid video ID</p>;
  const data = await getVideo(videoId);
  if (!data) return <p>Something wrong with data</p>;
  return <div>{data.url}</div>;
}
