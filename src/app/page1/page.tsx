"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.css";

// 하드코딩된 목표 날짜 (2024-12-02 19:00:00 KST)
const TARGET_DATE = new Date("2024-12-02T19:00:00+09:00");

export default function Page1() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 타이머 상태 관리
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 클라이언트에서 남은 시간 계산
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const timeDiff = TARGET_DATE.getTime() - now.getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimer({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTimeLeft(); // 초기 계산
    const interval = setInterval(calculateTimeLeft, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클린업
  }, []);

  // 비디오 재생 로직 수정
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // 볼륨을 0으로 설정
          videoRef.current.volume = 0;
          // 비디오 재생
          await videoRef.current.play();
        } catch (err) {
          console.error("Video playback failed:", err);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        src="https://www.mdoo.info/airi_kanna/wallpaper.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />

      <div className={styles.info__wrap}>
        <p className={styles.countdown__day}>
          D-{timer.days > 0 ? timer.days : 0}
        </p>
        <p className={styles.countdown__time}>
          {`${timer.hours.toString().padStart(2, "0")}:${timer.minutes
            .toString()
            .padStart(2, "0")}:${timer.seconds.toString().padStart(2, "0")}`}
        </p>
        <p className={styles.title}>COMING SOON</p>
        <p className={styles.sub}>마지막 별의 노래가 다가오는 날</p>
      </div>
    </div>
  );
}
