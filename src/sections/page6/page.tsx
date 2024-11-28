"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import ZoomableImage from "@/modules/zoom/zoomableImage";
import formatUrl from "@/modules/cdn/formatUrl";

import styles from "./styles.module.css";

export default function Page6() {
  const [indices, setIndices] = useState({
    row01: 0,
    row02: 0,
    row03: 0,
  });

  const ImgDir = {
    row01: [
      "/images/fan-arts/row01/1.jpg",
      "/images/fan-arts/row01/2.jpg",
      "/images/fan-arts/row01/3.jpg",
      "/images/fan-arts/row01/4.jpg",
      "/images/fan-arts/row01/5.jpg",
      "/images/fan-arts/row01/6.jpg",
      "/images/fan-arts/row01/7.jpg",
      "/images/fan-arts/row01/8.jpg",
    ],
    row02: [
      "/images/fan-arts/row02/1.png",
      "/images/fan-arts/row02/2.png",
      "/images/fan-arts/row02/3.png",
      "/images/fan-arts/row02/4.jpg",
      "/images/fan-arts/row02/5.jpg",
      "/images/fan-arts/row02/6.jpg",
      "/images/fan-arts/row02/7.jpg",
      "/images/fan-arts/row02/8.jpg",
    ],
    row03: [
      "/images/fan-arts/row03/1.jpg",
      "/images/fan-arts/row03/2.jpg",
      "/images/fan-arts/row03/3.jpg",
      "/images/fan-arts/row03/4.jpg",
      "/images/fan-arts/row03/5.jpg",
      "/images/fan-arts/row03/6.jpg",
      "/images/fan-arts/row03/7.jpg",
      "/images/fan-arts/row03/8.webp",
    ],
  };

  const nextImage = (row: "row01" | "row02" | "row03") => {
    setIndices((prev) => ({
      ...prev,
      [row]: prev[row] === ImgDir[row].length - 1 ? 0 : prev[row] + 1,
    }));
  };

  const prevImage = (row: "row01" | "row02" | "row03") => {
    setIndices((prev) => ({
      ...prev,
      [row]: prev[row] === 0 ? ImgDir[row].length - 1 : prev[row] - 1,
    }));
  };

  const handlers01 = useSwipeable({
    onSwipedLeft: () => nextImage("row01"),
    onSwipedRight: () => prevImage("row01"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handlers02 = useSwipeable({
    onSwipedLeft: () => nextImage("row02"),
    onSwipedRight: () => prevImage("row02"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>우리의_추억들 #1</span>
        <span className={styles.subtitle}>아이라 칸나의 사진관</span>
        <p className={styles.divider}>line</p>
        <span className={styles.description}>
          이때까지 우리의 추억들을 모아둔 사진관이에요!
        </span>
        <span className={styles.subdescription}>
          다양한 상황들의 그림을 보며 우리의 추억들을 회상해보아요
        </span>
      </div>
      <div className={styles.imagesGrid}>
        <div className={styles.rowContainer}>
          <button
            className={styles.navButton}
            onClick={() => prevImage("row01")}
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <div {...handlers01} className={styles.imageContainer}>
            <ZoomableImage
              width={664}
              height={500}
              src={formatUrl(ImgDir.row01[indices.row01])}
              alt={`row01 image ${indices.row01 + 1}`}
              className={styles.image}
            />
          </div>
          <button
            className={styles.navButton}
            onClick={() => nextImage("row01")}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>

        <div className={styles.rowContainer}>
          <button
            className={styles.navButton}
            onClick={() => prevImage("row02")}
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <div {...handlers02} className={styles.imageContainer}>
            <ZoomableImage
              width={664}
              height={500}
              src={formatUrl(ImgDir.row02[indices.row02])}
              alt={`row02 image ${indices.row02 + 1}`}
              className={styles.image}
            />
          </div>
          <button
            className={styles.navButton}
            onClick={() => nextImage("row02")}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>

        <div className={styles.galleryContainer}>
          {ImgDir.row03.map((imgSrc, index) => (
            <div key={index} className={styles.galleryItem}>
              <ZoomableImage
                width={664}
                height={500}
                src={formatUrl(imgSrc)}
                alt={`row03 image ${index + 1}`}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
