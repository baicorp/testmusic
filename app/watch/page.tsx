import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { videoId } = searchParams ?? { videoId: "" };
  console.log(videoId);
  if (typeof videoId !== "string") return <p>Invalid video ID</p>;

  const response = await fetch(`${process.env.BASE_URL}/api/watch`, {
    method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "User-Agent":
    //       "com.google.android.youtube/17.36.4 (Linux; U; Android 12; GB) gzip",
    //   },
    //   body: JSON.stringify({
    //     videoId,
    //     context: {
    //       client: {
    //         clientName: "ANDROID_TESTSUITE",
    //         clientVersion: "1.9",
    //         androidSdkVersion: 30,
    //         hl: "en",
    //         gl: "SG",
    //         utcOffsetMinutes: 0,
    //         params: "8AEB",
    //       },
    //     },
    //   }),
  });

  console.log(process.env.BASE_URL);

  const data = await response.json();
  if (!data) return <p>Something wrong with data</p>;

  const thumbnails = data?.videoDetails?.thumbnail?.thumbnails[0]?.url;
  const result = {
    videoId: data?.videoDetails?.videoId,
    title: data?.videoDetails?.title,
    thumbnailUrl: thumbnails,
    channelId: data?.videoDetails?.channelId,
    uploader: data?.videoDetails?.author,
    videoDetails: { ...data?.videoDetails, thumbnail: thumbnails },
    url: data.streamingData?.adaptiveFormats[
      data.streamingData?.adaptiveFormats?.length - 1
    ]?.url,
  };

  return <div>{JSON.stringify(result?.url, null, 2)}</div>;
}
