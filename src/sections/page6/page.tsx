"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

import styles from "./styles.module.css";

// 각 폴더별 .m3u8 경로를 매핑
const musicList = {
  section1: [
    { "1st single ADDICTION": "cdn/kanna-the-finale-files-main/Addiction/output.m3u8" },
    { "2nd single 최종화": "cdn/kanna-the-finale-files-main/Finale/output.m3u8" },
    { "3rd single 푸른 보석과 어린 용": "cdn/kanna-the-finale-files-main/New_World/output.m3u8" },
  ],
  section2: [
    { "나는 최강": "cdn/kanna-the-finale-files-main/Saikyo/output.m3u8" },
    { "좋아하니까": "cdn/kanna-the-finale-files-main/Love_Me/output.m3u8" },
    { "신시대": "cdn/kanna-the-finale-files-main/Shikisai/output.m3u8" },
  ],
  section3: [
    { "삼문소설": "cdn/kanna-the-finale-files-main/Sanmon_Shosetsu/output.m3u8" },
    { "스즈메": "cdn/kanna-the-finale-files-main/Suzume/output.m3u8" },
    { "에러": "cdn/kanna-the-finale-files-main/ERROR/output.m3u8" },
  ],
  section4: [
    { "아이돌": "cdn/kanna-the-finale-files-main/IDOL/output.m3u8" },
    { "색채": "cdn/kanna-the-finale-files-main/Shikisai/output.m3u8" },
    { "잠이 드는 거리": "cdn/kanna-the-finale-files-main/LADY/output.m3u8" },
  ],
  section5: [
    { "LADY": "cdn/kanna-the-finale-files-main/LADY/output.m3u8" },
    { "KICK BACK": "cdn/kanna-the-finale-files-main/KICKBACK/output.m3u8" },
    { "지구본": "cdn/kanna-the-finale-files-main/Chikyu/output.m3u8" },
  ],
  section6: [
    { "사랑해줘 사랑해줘 사랑해줘": "cdn/kanna-the-finale-files-main/Love_Wins/output.m3u8" },
    { "감 그레이": "cdn/kanna-the-finale-files-main/Frozen_Eclipse/output.m3u8" },
    { "괴수의 꽃노래": "cdn/kanna-the-finale-files-main/Kaiju_Song/output.m3u8" },
  ],
  section7: [
    { "최종화 (Acoustic Ver.)": "cdn/kanna-the-finale-files-main/Finale(Acoustic)/output.m3u8" },
    { "애타는 한 가슴을 달랠 수 있다면": "cdn/kanna-the-finale-files-main/Dragon/output.m3u8" },
    { "역광": "cdn/kanna-the-finale-files-main/Cannot_Stop/output.m3u8" },
  ],
  section8: [
    { "Frozen Eclipse": "cdn/kanna-the-finale-files-main/Frozen_Eclipse/output.m3u8" },
    { "Love wins all (IU)": "cdn/kanna-the-finale-files-main/Love_Wins/output.m3u8" },
    { "공주열차": "cdn/kanna-the-finale-files-main/Princess_Train/output.m3u8" },
  ],
  section9: [
    { "Cookie": "cdn/kanna-the-finale-files-main/Cookie/output.m3u8" },
    { "최종화 Live Clip": "cdn/kanna-the-finale-files-main/Finale(Live)/output.m3u8" },
    { "점묘의 노래 (w. 아야츠노 유니)": "cdn/kanna-the-finale-files-main/SUKI/output.m3u8" },
  ],
};

export default function Page6() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>우리의_추억들 #2</span>
        <span className={styles.subtitle}>아이리 칸나의 음악관</span>
        <p className={styles.divider}>line</p>
        <span className={styles.description}>
          칸나의 발걸음이 담겨있는 음악관이에요!
        </span>
        <span className={styles.subdescription}>
          그동안 칸나와 함께 걸어왔던 길을 같이 걸어보아요!
        </span>
      </div>
      <div className={styles.content}>
        {Object.entries(musicList).map(([sectionKey, items]) => (
          <div key={sectionKey} className={styles.musicRow}>
            {items.map((item, index) => (
              <div key={`${sectionKey}-${index}`} className={styles.musicItem}>
                <h3>{Object.keys(item)[0]}</h3>
                <div className={styles.video}>
                  {hasWindow && (
                    <ReactPlayer
                      url={`https://apimin.montkim.com/${Object.values(item)[0]}`}
                      width="100%"
                      height="100%"
                      controls
                      light={`https://apimin.montkim.com/${Object.values(item)[0].replace(
                        "output.m3u8",
                        "thumbnail.jpg"
                      )}`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

