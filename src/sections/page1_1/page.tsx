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

      // 콘서트 시간이 되면 화면을 새로고침 한다.
      if (timeDiff <= 1) {
        clearInterval(interval);
        window.location.reload();
      }

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
        src={formatUrl("/videos/background.mp4")}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />

      <div className={styles.info__wrap}>
        <p className={styles.countdown__day}>
          D-{timer.days > 0 ? timer.days : "DAY"}
        </p>
        <p className={`${styles.countdown__time} ${notoSansKr.className}`}>
          {`${timer.hours.toString().padStart(2, "0")}:${timer.minutes
            .toString()
            .padStart(2, "0")}:${timer.seconds.toString().padStart(2, "0")}`}
        </p>
        <p className={`${styles.title} ${notoSansKr.className}`}>COMING SOON</p>
        <p className={styles.sub}>마지막 별의 노래가 다가오는 날</p>

        <div className={styles.ctas_group}>
          <div className={styles.ctas_subgroup}>
            <button
              className={styles.cta}
              onClick={() => {
                const pvSection = document.getElementById("pv");
                if (pvSection) {
                  pvSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              PV 보러가기{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.75147 17.6485C8.28284 17.1799 8.28284 16.4201 8.75147 15.9515L12.7029 12L8.75147 8.04853C8.28284 7.5799 8.28284 6.8201 8.75147 6.35147C9.22009 5.88284 9.97989 5.88284 10.4485 6.35147L15.2485 11.1515C15.7172 11.6201 15.7172 12.3799 15.2485 12.8485L10.4485 17.6485C9.97989 18.1172 9.2201 18.1172 8.75147 17.6485Z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <div className={styles.ctas_subgroup}>
            <button
              className={styles.cta}
              onClick={() => {
                window.open(formatUrl("/gifts/pamphlet.pdf"));
              }}
            >
              셋리스트 다운로드{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.75147 17.6485C8.28284 17.1799 8.28284 16.4201 8.75147 15.9515L12.7029 12L8.75147 8.04853C8.28284 7.5799 8.28284 6.8201 8.75147 6.35147C9.22009 5.88284 9.97989 5.88284 10.4485 6.35147L15.2485 11.1515C15.7172 11.6201 15.7172 12.3799 15.2485 12.8485L10.4485 17.6485C9.97989 18.1172 9.2201 18.1172 8.75147 17.6485Z"
                  ></path>
                </svg>
              </span>
            </button>

            <button
              className={styles.cta}
              onClick={() => {
                window.open(
                  "https://chzzk.naver.com/live/f722959d1b8e651bd56209b343932c01"
                );
              }}
            >
              콘서트 보러가기{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.75147 17.6485C8.28284 17.1799 8.28284 16.4201 8.75147 15.9515L12.7029 12L8.75147 8.04853C8.28284 7.5799 8.28284 6.8201 8.75147 6.35147C9.22009 5.88284 9.97989 5.88284 10.4485 6.35147L15.2485 11.1515C15.7172 11.6201 15.7172 12.3799 15.2485 12.8485L10.4485 17.6485C9.97989 18.1172 9.2201 18.1172 8.75147 17.6485Z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
