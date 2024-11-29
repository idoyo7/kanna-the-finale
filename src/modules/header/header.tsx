"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import formatUrl from "../cdn/formatUrl";

import styles from "./styles.module.css";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // 모바일 여부 상태
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 모바일 햄버거가 열려있을 땐 스크롤 방지
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileNavOpen]);

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (isMobile || window.scrollY >= 10) {
      headerRef.current?.classList.add(styles.withBg);
    } else {
      headerRef.current?.classList.remove(styles.withBg);
    }
  }, [isMobile]);

  // URL 해시 체크 인터벌
  const hashCheckIntervalRef = useRef<number | null>(null);

  // 스크롤 이벤트 등록
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // 초기 실행

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      hashCheckIntervalRef.current = window.setInterval(() => {
        const currentHash = window.location.hash.replace("#", "");
        if (currentHash !== activeSection) {
          setActiveSection(currentHash);
        }
      }, 50);
    }

    return () => {
      if (hashCheckIntervalRef.current !== null) {
        clearInterval(hashCheckIntervalRef.current);
      }
    };
  }, [activeSection]);

  // 메뉴 항목 데이터
  const navItems = [
    { id: "main", alternatives: ["hero", "banner", "main"], label: "메인" },
    { id: "pv", alternatives: ["pv", "story"], label: "PV" },
    { id: "history", alternatives: ["history", "history2"], label: "보석함" },
    {
      id: "post",
      alternatives: ["post", "giftbox", "share"],
      label: "칸나의 선물",
    },
  ];

  return (
    <>
      <div
        className={`${styles.dim} ${isMobileNavOpen ? styles.show : ""}`}
        onClick={() => setIsMobileNavOpen(false)}
      />

      <header className={styles.header}>
        <div
          ref={headerRef}
          className={`${styles.container} ${isMobile ? styles.withBg : ""}`}
        >
          <a href="#hero">
            <Image
              width={86}
              height={44}
              className={styles.logo}
              src={formatUrl("/images/logos/horizontal.png")}
              alt="The Finale"
            />
          </a>

          <nav className={styles.pcNav}>
            <ul className={styles.nav}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={
                      item.alternatives
                        ? item.alternatives.includes(activeSection)
                          ? styles.active
                          : ""
                        : item.id === activeSection
                        ? styles.active
                        : ""
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen);
            }}
            aria-label="Navigation Button"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
            </svg>
          </button>
        </div>

        <div
          className={`${styles.mobileNav} ${styles.withBg} ${
            isMobileNavOpen ? styles.show : ""
          }`}
        >
          <div>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  item.alternatives
                    ? item.alternatives.includes(activeSection)
                      ? styles.active
                      : ""
                    : item.id === activeSection
                    ? styles.active
                    : ""
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
