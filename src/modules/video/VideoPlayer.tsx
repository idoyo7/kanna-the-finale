"use client";

import { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
  url: string;
  thumbnail: string;
  title?: string;
  popup?: boolean;
  aspectRatio?: string;
  className?: string;
}

let modalAppElementSet = false;

export default function VideoPlayer({
  url,
  thumbnail,
  title,
  popup = true,
  aspectRatio = "16 / 9",
  className,
}: VideoPlayerProps) {
  const [open, setOpen] = useState(false);
  const [inlinePlaying, setInlinePlaying] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (modalAppElementSet) return;
    const root = document.getElementById("__next") ?? document.body;
    try {
      Modal.setAppElement(root);
      modalAppElementSet = true;
    } catch {
      // already set by another instance
    }
  }, []);

  const handleThumbnailClick = useCallback(() => {
    if (popup) setOpen(true);
    else setInlinePlaying(true);
  }, [popup]);

  const closeModal = useCallback(() => setOpen(false), []);

  const renderPlayer = (autoPlay: boolean) => (
    <MediaPlayer
      className={styles.player}
      src={url}
      title={title}
      poster={thumbnail}
      autoPlay={autoPlay}
      crossOrigin
      playsInline
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );

  return (
    <>
      <div
        className={`${styles.container} ${className ?? ""}`}
        style={{ aspectRatio }}
      >
        {!popup && inlinePlaying ? (
          renderPlayer(true)
        ) : (
          <button
            type="button"
            className={styles.thumbnailButton}
            onClick={handleThumbnailClick}
            aria-label={title ? `${title} 재생` : "비디오 재생"}
          >
            <div
              className={styles.thumbnail}
              style={{ backgroundImage: `url(${thumbnail})` }}
            />
            <div className={styles.overlay}>
              <div className={styles.playButton}>
                <svg
                  width="28"
                  height="32"
                  viewBox="0 0 28 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M26 14.268a2 2 0 0 1 0 3.464L5 29.856A2 2 0 0 1 2 28.124V3.876a2 2 0 0 1 3-1.732l21 12.124z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      {popup && (
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          contentLabel={title ?? "비디오 플레이어"}
          overlayClassName={styles.modalOverlay}
          className={styles.modalContent}
          closeTimeoutMS={240}
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="닫기"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M1 1l16 16M17 1L1 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {title && <p className={styles.modalTitle}>{title}</p>}

          <div className={styles.modalPlayerWrap}>
            {open && renderPlayer(true)}
          </div>
        </Modal>
      )}
    </>
  );
}
