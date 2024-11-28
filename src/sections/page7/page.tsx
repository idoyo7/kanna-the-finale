"use client";

import { useState, useEffect } from "react";

import ReactPlayer from "react-player/lazy";
// import ReactPlayer from "react-player/youtube";

import styles from "./styles.module.css";

const musicList = {
  section1: [
    { "1st single ADDICTION": "kPdB6iGYBBc" },
    { "2nd single 최종화": "ajDAmJYPQ-U" },
    { "3rd single 푸른 보석과 어린 용": "gq3gzxPBOK0" },
  ],
  section2: [
    { "나는 최강": "MhtScZvcsiQ" },
    { 좋아하니까: "futqIdI0rOY" },
    { 신시대: "_nYgmgYMdW0" },
  ],
  section3: [
    { 삼문소설: "3PxbqWrDCz4" },
    { 스즈메: "v8MjiqzLKTs" },
    { 에러: "eNlXPUp9WBw" },
  ],
  section4: [
    { 아이돌: "4_Aknw7fm_8" },
    { 색채: "AsoPg-h-644" },
    { "잠이 드는 거리": "nYgMMdYDGak" },
  ],
  section5: [
    { LADY: "GdH0TsPznUs" },
    { "KICK BACK": "Ei1WobzwsVI" },
    { 지구본: "8VdlQZQ46D4" },
  ],
  section6: [
    { "사랑해줘 사랑해줘 사랑해줘": "OgwD6f_tdIY" },
    { "감 그레이": "eLJENPbBe8A" },
    { "괴수의 꽃노래": "of5l0st1kA8" },
  ],
  section7: [
    { "최종화 (Acoustic Ver.)": "iCCqSFvz9kM" },
    { "애타는 한 가슴을 달랠 수 있다면": "IRvrDhVYXHQ" },
    { 역광: "q-QjjmJjU_8" },
  ],
  section8: [
    { "Frozen Eclipse": "RbQv87f4mvg" },
    { "Love wins all (IU)": "Nr3AhMP1lVg" },
    { 공주열차: "6A04OifrfR0" },
  ],
};

export default function Page7() {
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
                      url={`https://youtu.be/${Object.values(item)[0]}`}
                      width="100%"
                      height="100%"
                      light={`https://i.ytimg.com/vi/${
                        Object.values(item)[0]
                      }/sddefault.jpg`}
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
