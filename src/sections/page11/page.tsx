"use client";

import VideoPlayer from "@/modules/video/VideoPlayer";

import styles from "./styles.module.css";

const baseCDN = process.env.NEXT_PUBLIC_CDN;
const baseVideoUrl = `${baseCDN}/videos/0f3Wz3yztbY`;

export default function Page3() {
  return (
    <div>
      <div className={styles.video}>
        <VideoPlayer
          url={`${baseVideoUrl}/output.m3u8`}
          thumbnail={`${baseVideoUrl}/thumbnail.jpg`}
          title="나한테는 아이리 칸나도 힙합이야 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 🎸"
        />
      </div>
    </div>
  );
}
