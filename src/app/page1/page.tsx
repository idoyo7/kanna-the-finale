'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import styles from './styles.module.css';

export default function Page1() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        });

        const animate = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.error('Video playback failed:', err);
            });
        }
    }, []);

    return (
        <div className={styles.container}>
            <video
                ref={videoRef}
                className={styles.video}
                src="/videos/Airi_kanna_Last_Concert_wallpaper.mp4"
                muted
                loop
                playsInline
                autoPlay
                controls
            />
        </div>
    );
}
