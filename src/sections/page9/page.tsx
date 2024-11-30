"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Modal from "react-modal";
import { sendGTMEvent } from "@next/third-parties/google";

import formatUrl from "@/modules/cdn/formatUrl";

import styles from "./styles.module.css";
import { canDownload } from "@/modules/time/calcTime";

export default function Page9() {
  const appElementRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(
        typeof window !== "undefined" &&
          window.matchMedia("(max-width: 768px)").matches
      );
    }

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => setSecondModalOpen(true);
  const closeSecondModal = () => setSecondModalOpen(false);

  if (appElementRef.current) {
    Modal.setAppElement(appElementRef.current);
  }

  return (
    <div className={styles.container} ref={appElementRef}>
      <div className={styles.title}>선물함</div>
      <div className={styles.giftboxContainer}>
        <div className={styles.giftbox} onClick={openFirstModal}>
          <Image
            src={formatUrl("/images/gifts/thumbnails/gift1.jpg")}
            alt="[기간한정] 아이리칸나 The Finale 월페이퍼 공유"
            className={styles.giftboxImage}
            width={206}
            height={206}
          />

          <div className={styles.giftboxTitle}>
            [기간한정] 아이리칸나 The Finale 월페이퍼 공유
          </div>
        </div>

        <div className={styles.giftbox} onClick={openSecondModal}>
          <Image
            src={formatUrl("/images/gifts/thumbnails/gift2.jpg")}
            alt="[기간한정] 아이리칸나 모바일, 탭용 배경화면 공유"
            className={styles.giftboxImage}
            width={206}
            height={206}
          />

          <div className={styles.giftboxTitle}>
            [기간한정] 아이리칸나 모바일, 탭용 배경화면 공유
          </div>
        </div>
      </div>

      <Modal
        isOpen={firstModalOpen}
        onRequestClose={closeFirstModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: !isMobile ? "40px" : "80px",
            left: !isMobile ? "40px" : "0",
            right: !isMobile ? "40px" : "0",
            bottom: !isMobile ? "40px" : "0",

            width: !isMobile ? "70dvw" : "100dvw",
            height: !isMobile ? "85dvh" : "calc(100dvh - 80px)",

            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <div className={styles.contentWrapper} data-lenis-prevent="true">
          <button
            onClick={() => setFirstModalOpen(false)}
            className={styles.xMark}
          />
          <p className={`${styles.contentTitle} ${styles.marginBottom2}`}>
            [기간한정] 아이리칸나 The Finale 월페이퍼 공유
          </p>
          <p className={`${styles.contentSubTitle} ${styles.marginBottom2}`}>
            아이리칸나 월페이퍼를 배포합니다!
            <br />
            여러분이 있어 가장 빛났던 칸나의 모습을 간직하세요
          </p>

          <Image
            width={768}
            height={768}
            src={formatUrl("/images/gifts/thumbnails/gift1.jpg")}
            alt="[기간한정] 아이리칸나 The Finale 월페이퍼 공유"
            className={`${styles.contentImage} ${styles.marginBottom3}`}
          />

          <p className={`${styles.contents} ${styles.marginBottom2}`}>
            #여러분의 가장 가까운 곳에서 영원히 빛날 수 있도록
            <br />
            #칸나와의_마지막_순간을 함께
          </p>
          <p className={`${styles.contents} ${styles.marginBottom1}`}>
            아래 링크에서 파일을 다운 받으실 수 있습니다.
            <br /> 서버 문제로 다운로드가 되지 않는 경우, Google Drive 링크로
            다운로드 받으시기 바랍니다. (모두 같은 파일입니다.)
          </p>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [다운로드]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn} ${styles.marginBottom1}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({ event: "downloadGift", value: "gift1_cdn" });

                if (canDownload()) {
                  window.location.href = formatUrl(
                    "/gifts/gift1/Airi_kanna_Last_Concert_wallpaper.mp4"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; 다운로드 (357.09 MB)
            </a>
          </div>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [Google Drive 다운로드 1]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn} ${styles.marginBottom1}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({ event: "downloadGift", value: "gift1_google1" });

                if (canDownload()) {
                  window.open(
                    "https://drive.google.com/file/d/1xL29q3G0NzwWow--xQ0OWPd9VCErhGLV/view?usp=sharing"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; 다운로드 (357.09 MB)
            </a>
          </div>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [Google Drive 다운로드 2]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({ event: "downloadGift", value: "gift1_google2" });

                if (canDownload()) {
                  window.open(
                    "https://drive.google.com/file/d/1GlfxncjS1zu09YpGr4Fp9vkCu_F7R1WO/view?usp=sharing"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; 다운로드 (357.09 MB)
            </a>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={secondModalOpen}
        onRequestClose={closeSecondModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: !isMobile ? "40px" : "80px",
            left: !isMobile ? "40px" : "0",
            right: !isMobile ? "40px" : "0",
            bottom: !isMobile ? "40px" : "0",

            width: !isMobile ? "70dvw" : "100dvw",
            height: !isMobile ? "85dvh" : "calc(100dvh - 80px)",

            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <div className={styles.contentWrapper} data-lenis-prevent="true">
          <button
            onClick={() => setSecondModalOpen(false)}
            className={styles.xMark}
          />
          <p className={`${styles.contentTitle} ${styles.marginBottom2}`}>
            [기간한정] 아이리칸나 모바일, 탭용 배경화면 공유
          </p>
          <p className={`${styles.contentSubTitle} ${styles.marginBottom1}`}>
            칸나와 뜨거웠던 여름을 배경화면으로 간직하세요!
          </p>

          <Image
            width={768}
            height={432}
            src={formatUrl("/gifts/gift2/칸나와 여름을 함께.png")}
            alt="[기간한정] 아이리칸나 모바일, 탭용 배경화면 공유"
            className={`${styles.contentImage} ${styles.marginBottom3}`}
          />

          <p className={`${styles.contents} ${styles.marginBottom2}`}>
            #칸나와의_여름을_함께
          </p>
          <p className={`${styles.contents} ${styles.marginBottom1}`}>
            아래 링크에서 파일을 다운 받으실 수 있습니다. (종류에 따라 사이즈가
            다릅니다.)
            <br /> 서버 문제로 다운로드가 되지 않는 경우, Google Drive 링크로
            다운로드 받으시기 바랍니다.
          </p>

          <br />

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [안드로이드]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn} ${styles.marginBottom1}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({
                  event: "downloadGift",
                  value: "gift2_android_cdn",
                });

                if (canDownload()) {
                  window.location.href = formatUrl(
                    "/gifts/gift2/칸나와 여름을 함께_안드.png"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; 안드로이드용 다운로드 (7.75MB)
            </a>
          </div>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [아이폰]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn} ${styles.marginBottom1}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({ event: "downloadGift", value: "gift2_ios_cdn" });

                if (canDownload()) {
                  window.location.href = formatUrl(
                    "/gifts/gift2/칸나와 여름을 함께_아이폰.png"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; 아이폰용 다운로드 (3.82MB)
            </a>
          </div>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>[PC]</p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn} ${styles.marginBottom1}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({ event: "downloadGift", value: "gift2_pc_cdn" });

                if (canDownload()) {
                  window.location.href = formatUrl(
                    "/gifts/gift2/칸나와 여름을 함께.png"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; PC용 다운로드 (4.97MB)
            </a>
          </div>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            &nbsp;
          </p>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [Google Drive_안드로이드]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn} ${styles.marginBottom1}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({
                  event: "downloadGift",
                  value: "gift2_android_google",
                });

                if (canDownload()) {
                  window.open(
                    "https://drive.google.com/file/d/1jIsyvxu5B9CO5ahH5JpYKVXh37qo8j3e/view?usp=sharing"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; 안드로이드용 다운로드 (7.75MB)
            </a>
          </div>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [Google Drive_아이폰]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({
                  event: "downloadGift",
                  value: "gift2_ios_google",
                });

                if (canDownload()) {
                  window.open(
                    "https://drive.google.com/file/d/1UkBPu8-OCWM0qWLSJDxmvzuTclLTJBCS/view?usp=sharing"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; 아이폰용 다운로드 (3.82MB)
            </a>
          </div>

          <p className={`${styles.contents} ${styles.marginBottom05}`}>
            [Google Drive_PC]
          </p>
          <div className={styles.paddingBottom2}>
            <a
              href="#"
              className={`${styles.downloadBtn}`}
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                sendGTMEvent({
                  event: "downloadGift",
                  value: "gift2_pc_google",
                });

                if (canDownload()) {
                  window.open(
                    "https://drive.google.com/file/d/1SLgZ7hIfvnzva0nZ9AdTAtUw6kSZ2DQw/view?usp=sharing"
                  );
                } else {
                  alert("다운로드 가능 기간이 아닙니다.");
                }
              }}
            >
              &#x1F4CE; PC용 다운로드 (4.97MB)
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}
