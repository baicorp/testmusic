type MusicPlayerProps = {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  uploader: string;
  url: string;
};

export async function getVideo(videoId: string): Promise<MusicPlayerProps> {
  try {
    const response = await fetch(
      "https://music.youtube.com/youtubei/v1/player?key=AIzaSyAOghZGza2MQSZkY_zfZ370N-PUdXEo8AI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "com.google.android.youtube/17.36.4 (Linux; U; Android 12; GB) gzip",
        },
        body: JSON.stringify({
          videoId,
          context: {
            client: {
              clientName: "ANDROID_TESTSUITE",
              clientVersion: "1.9",
              androidSdkVersion: 30,
              hl: "en",
              gl: "US",
              utcOffsetMinutes: 0,
            },
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`YouTube API Error: ${errorData.error.message}`);
    }

    const data = await response.json();

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

    return data;
  } catch (error) {
    console.error("Error fetching YouTube data POST:", error);
    return {
      videoId: "error",
      title: "error",
      thumbnailUrl: "error",
      // channelId: "error",
      uploader: "error",
      // videoDetails: { ...data?.videoDetails, thumbnail: thumbnails },
      url: "error",
    };
  }
}
