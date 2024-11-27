"use client";

import { useEffect, useRef } from "react";

import styles from "./styles.module.css";

function Page1_1() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Video playback failed:", err);
      });
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        className={styles.video}
        src="https://www.mdoo.info/airi_kanna/wallpaper.mp4"
        muted
        loop
        playsInline
        autoPlay
      />
    </div>
  );
}

export default Page1_1;
