"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

import styles from "./styles.module.css";

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
            url={m3u8Url} // .m3u8 경로
            width="100%"
            height="100%"
            playing={false}
            controls
            light="https://apimin.montkim.com/cdn/kanna-the-finale-files-main/concert/thumbnail.jpg"
          />
        )}
      </div>
    </div>
  );
}


