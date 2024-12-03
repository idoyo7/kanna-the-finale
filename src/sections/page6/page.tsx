"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

import styles from "./styles.module.css";

// 공통 CDN 경로
const baseUrl = "https://apimin.montkim.com/cdn/kanna-the-finale-files-main/videos/";

// 각 폴더별 경로를 매핑 (output.m3u8 제거)
const musicList = {
  section1: [
    { "1st single ADDICTION": "Addiction" },
    { "2nd single 최종화": "Finale" },
    { "3rd single 푸른 보석과 어린 용": "New_World" },
  ],
  section2: [
    { "나는 최강": "Saikyo" },
    { "좋아하니까": "Love_Me" },
    { "신시대": "Shikisai" },
  ],
  section3: [
    { "삼문소설": "Sanmon_Shosetsu" },
    { "스즈메": "Suzume" },
    { "에러": "ERROR" },
  ],
  section4: [
    { "아이돌": "IDOL" },
    { "색채": "Shikisai" },
    { "잠이 드는 거리": "LADY" },
  ],
  section5: [
    { "LADY": "LADY" },
    { "KICK BACK": "KICKBACK" },
    { "지구본": "Chikyu" },
  ],
  section6: [
    { "사랑해줘 사랑해줘 사랑해줘": "Love_Wins" },
    { "감 그레이": "Frozen_Eclipse" },
    { "괴수의 꽃노래": "Kaiju_Song" },
  ],
  section7: [
    { "최종화 (Acoustic Ver.)": "Finale(Acoustic)" },
    { "애타는 한 가슴을 달랠 수 있다면": "Dragon" },
    { "역광": "Cannot_Stop" },
  ],
  section8: [
    { "Frozen Eclipse": "Frozen_Eclipse" },
    { "Love wins all (IU)": "Love_Wins" },
    { "공주열차": "Princess_Train" },
  ],
  section9: [
    { "Cookie": "Cookie" },
    { "최종화 Live Clip": "Finale(Live)" },
    { "점묘의 노래 (w. 아야츠노 유니)": "SUKI" },
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
                      url={`${baseUrl}${Object.values(item)[0]}/output.m3u8`}
                      width="100%"
                      height="100%"
                      controls
                      light={`${baseUrl}${Object.values(item)[0]}/thumbnail.jpg`}
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

