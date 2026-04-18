"use client";

import VideoPlayer from "@/modules/video/VideoPlayer";

import styles from "./styles.module.css";

const baseCDN = process.env.NEXT_PUBLIC_CDN;
const baseConcertUrl = `${baseCDN}/concert`;

export default function Page3() {
  return (
    <div>
      <div className={styles.video}>
        <VideoPlayer
          url={`${baseConcertUrl}/output.m3u8`}
          thumbnail={`${baseConcertUrl}/thumbnail.jpg`}
          title="AIRI KANNA - The Finale"
        />
      </div>
    </div>
  );
}
