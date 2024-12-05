"use client";

import { useEffect, useRef, useState } from "react";

import formatUrl from "@/modules/cdn/formatUrl";
import { TARGET_DATE } from "@/modules/time/calcTime";

import { notoSansKr } from "@/modules/styles/fonts";
import styles from "./styles.module.css";

export default function Page1_1() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // 타이머 상태 관리
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 공연 종료 여부 상태 관리
  const [isPast, setIsPast] = useState(false);

  // 타이머 업데이트 로직
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const timeDiff = TARGET_DATE.getTime() - now.getTime();

      if (timeDiff <= 0) {
        // 공연이 끝난 경우
        setIsPast(true);
      } else {
        // 공연 전
        setIsPast(false);
      }

      const absoluteDiff = Math.abs(timeDiff);
      const days = Math.floor(absoluteDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (absoluteDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((absoluteDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((absoluteDiff % (1000 * 60)) / 1000);

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

  // 비디오 재생 로직
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
        src={formatUrl("/videos/background.mp4")}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />

      <div className={styles.info__wrap}>
        <p className={styles.countdown__day}>
          {isPast ? `D+${timer.days}` : `D-${timer.days}`}
        </p>
        <p className={`${styles.countdown__time} ${notoSansKr.className}`}>
          {`${timer.hours.toString().padStart(2, "0")}:${timer.minutes
            .toString()
            .padStart(2, "0")}:${timer.seconds.toString().padStart(2, "0")}`}
        </p>
        <p className={`${styles.title} ${notoSansKr.className}`}>
          {isPast ? "CONCERT ENDED" : "COMING SOON"}
        </p>
        <p className={styles.sub}>
          {isPast
            ? "공연이 끝났습니다. 여운을 함께 느껴보세요!"
            : "마지막 별의 노래가 다가오는 날"}
        </p>
      </div>
    </div>
  );
}

