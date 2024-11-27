"use client";

import Image from "next/image";

import { raleway } from "@/styles/fonts";
import styles from "./styles.module.css";

export default function Page3() {
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src="https://www.mdoo.info/airi_kanna/wallpaper.mp4"
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
          src="/The_finale_logo3.png"
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
  );
}
