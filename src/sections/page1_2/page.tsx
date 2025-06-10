"use client";

import Image from "next/image";

import { raleway } from "@/modules/styles/fonts";
import formatUrl from "@/modules/cdn/formatUrl";

import styles from "./styles.module.css";

export default function Page1_2() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <video
          className={styles.video}
          src={formatUrl("/videos/background.mp4")}
          muted
          loop
          playsInline
          autoPlay
        />

        <div className={styles.left}>
          <div className={styles.left__bar}></div>
          <p className={`${styles.left__content} ${raleway.className}`}>
            The last song
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={formatUrl("/images/logos/vertical.png")}
            width={326}
            height={294}
            alt="The Finale"
          />

          <div className={styles.bottom__bar}></div>
        </div>

        <div className={styles.right}>
          <p className={`${styles.right__content} ${raleway.className}`}>
            of Stellar
          </p>
          <div className={styles.right__bar}></div>
        </div>
      </div>

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
              // kanna 폴더의 index.html을 참조
              window.open("/kanna/", "_blank");
            }}
          >
            칸나 홈페이지{" "}
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
  );
}

