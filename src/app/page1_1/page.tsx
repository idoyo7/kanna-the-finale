'use client';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default function Page2() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error("Video playback failed:", err);
        });
      }
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
            />
            <img className={styles.logo} src="The_finale_logo3.png"/>
            <div className={styles.left__bar}></div>
            <div className={styles.right__bar}></div>
            <div className={styles.bottom__bar}></div>
            <p className={`${styles.left__content} ${styles.raleway__medium}`}>The last song</p>
            <p className={`${styles.right__content} ${styles.raleway__medium}`}>of Stellar</p>
        </div>
    );
}