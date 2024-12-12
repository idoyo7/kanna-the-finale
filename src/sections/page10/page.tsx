"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

import styles from "./styles.module.css";

// 공통 CDN 경로
const baseUrl = "https://apimin.montkim.com/cdn/kanna-the-finale-files-main/videos/";

const hiphopVideo = {
  title: "나한테는 아이리 칸나도 힙합이야 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 🎸",
  videoId: "0f3Wz3yztbY", // Replace with the actual video ID if necessary.
};


export default function Page3() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  // HLS 파일 경로
  const m3u8Url =
    "https://apimin.montkim.com/cdn/kanna-the-finale-files-main/concert/output.m3u8";

  return (
    <div>
      <div className={styles.video}>
        {hasWindow && (
          <ReactPlayer
            url={`${baseUrl}${hiphopVideo.videoId}/output.m3u8`}
            width="100%"
            height="100%"
            playing={false}
            controls
            light={`${baseUrl}${hiphopVideo.videoId}/thumbnail.jpg`}
          />
        )}
      </div>
    </div>
  );
}

