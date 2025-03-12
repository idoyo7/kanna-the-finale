"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

import styles from "./styles.module.css";
// .env 파일에 선언된 NEXT_PUBLIC_CDN 값을 사용
const baseCDN = process.env.NEXT_PUBLIC_CDN; // 예: "https://apimin.montkim.com/cdn/kanna-the-finale-files-main"
const baseConcertUrl = `${baseCDN}/concert`;

export default function Page3() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  // HLS 파일 경로
  // const m3u8Url =
  //   "https://apimin.montkim.com/cdn/kanna-the-finale-files-main/concert/output.m3u8";

  // HLS 파일 및 썸네일 URL을 환경변수를 활용하여 구성
  const m3u8Url = `${baseConcertUrl}/output.m3u8`;
  const thumbnailUrl = `${baseConcertUrl}/thumbnail.jpg`;

  return (
    <div>
      <div className={styles.video}>
        {hasWindow && (
          <ReactPlayer
            url={m3u8Url}
            // url={`${baseUrl}${hiphopVideo.videoId}/output.m3u8`}
            width="100%"
            height="100%"
            playing={false}
            controls
            light={thumbnailUrl}
            // light="https://apimin.montkim.com/cdn/kanna-the-finale-files-main/concert/thumbnail.jpg"
          />
        )}
      </div>
    </div>
  );
}


