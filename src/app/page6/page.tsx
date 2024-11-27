"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import styles from "./styles.module.css";

export default function Page6() {
    // 각 raw별로 별도의 인덱스 상태 관리
    const [indices, setIndices] = useState({
        raw01: 0,
        raw02: 0,
        raw03: 0
    });

    const ImgDir = {
        raw01: [
            "/img/raw01/raw01_1.jpg",
            "/img/raw01/raw01_2.jpg",
            "/img/raw01/raw01_3.jpg",
            "/img/raw01/raw01_4.jpg",
            "/img/raw01/raw01_5.jpg",
            "/img/raw01/raw01_6.jpg",
            "/img/raw01/raw01_7.jpg",
            "/img/raw01/raw01_8.jpg",
        ],
        raw02: [
            "/img/raw02/raw02_1.png",
            "/img/raw02/raw02_2.png",
            "/img/raw02/raw02_3.png",
            "/img/raw02/raw02_4.jpg",
            "/img/raw02/raw02_5.jpg",
            "/img/raw02/raw02_6.jpg",
            "/img/raw02/raw02_7.jpg",
            "/img/raw02/raw02_8.jpg",
        ],
        raw03: [
            "/img/raw03/raw03_1.jpg",
            "/img/raw03/raw03_2.jpg",
            "/img/raw03/raw03_3.jpg",
            "/img/raw03/raw03_4.jpg",
            "/img/raw03/raw03_5.jpg",
            "/img/raw03/raw03_6.jpg",
            "/img/raw03/raw03_7.jpg",
            "/img/raw03/raw03_8.webp",
        ],
    };

    const nextImage = (raw: 'raw01' | 'raw02' | 'raw03') => {
        setIndices(prev => ({
            ...prev,
            [raw]: prev[raw] === ImgDir[raw].length - 1 ? 0 : prev[raw] + 1
        }));
    };

    const prevImage = (raw: 'raw01' | 'raw02' | 'raw03') => {
        setIndices(prev => ({
            ...prev,
            [raw]: prev[raw] === 0 ? ImgDir[raw].length - 1 : prev[raw] - 1
        }));
    };

    const createHandlers = (raw: 'raw01' | 'raw02' | 'raw03') => useSwipeable({
        onSwipedLeft: () => nextImage(raw),
        onSwipedRight: () => prevImage(raw),
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>우리의_추억들#1</span>
                <span className={styles.subtitle}>아이라 칸나의 사진관</span>
                <p className={styles.divider}>line</p>
                <span className={styles.description}>이때까지 우리의 추억들을 모아둔 사진관이에요!</span>
                <span className={styles.subdescription}>다양한 상황들의 그림을 보며 우리의 추억들을 회상해보아요</span>
            </div>
            <div className={styles.imagesGrid}>
                {(['raw01', 'raw02', 'raw03'] as const).map((raw) => (
                    <div key={raw} className={styles.rowContainer}>
                        <button 
                            className={styles.navButton} 
                            onClick={() => prevImage(raw)}
                            aria-label="Previous image"
                        >
                            &#10094;
                        </button>
                        <div {...createHandlers(raw)} className={styles.imageContainer}>
                            <img 
                                src={ImgDir[raw][indices[raw]]} 
                                alt={`${raw} image ${indices[raw] + 1}`}
                                className={styles.image}
                            />
                        </div>
                        <button 
                            className={styles.navButton} 
                            onClick={() => nextImage(raw)}
                            aria-label="Next image"
                        >
                            &#10095;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
