"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import formatUrl from "../cdn/formatUrl";

import styles from "./styles.module.css";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (window.scrollY >= 10) {
      headerRef.current?.classList.add(styles.withBg);
    } else {
      headerRef.current?.classList.remove(styles.withBg);
    }
  }, []);

  // 해시 변경 이벤트 핸들러
  const handleHashChange = useCallback(
    (event?: HashChangeEvent) => {
      event?.preventDefault();

      const hash = window.location.hash.replace("#", "");

      if (hash !== activeSection) {
        setActiveSection(hash);
      }
    },
    [activeSection]
  );

  // 해시 변경 이벤트 등록
  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // 초기 실행

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeSection, handleHashChange]);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
    <header ref={headerRef} className={styles.container}>
      <a href="#hero">
        <Image
          width={86}
          height={44}
          className={styles.logo}
          src={formatUrl("/images/logos/horizontal.png")}
          alt="The Finale"
        />
      </a>

      <nav>
        <ul className={styles.nav}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  (
                    item.alternatives
                      ? item.alternatives.includes(activeSection)
                      : item.id === activeSection
                  )
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
    </header>
  );
}

export default Header;
