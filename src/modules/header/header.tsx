"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      headerRef.current?.classList.add(styles.withBg);
    } else {
      headerRef.current?.classList.remove(styles.withBg);
    }
  };

  // URL의 해시를 감지하여 active 상태 업데이트
  const updateActiveSection = () => {
    const hash = window.location.hash.replace("#", "") || "hero";
    setActiveSection(hash);
  };

  // 해시 변경 이벤트 등록
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash !== activeSection) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // 초기 실행

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // 의존성 배열을 빈 배열로 설정

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 배열로 설정하여 한 번만 실행

  // 메뉴 항목 데이터
  const navItems = [
    { id: "main", label: "메인" },
    { id: "pv", label: "PV" },
    { id: "history", label: "보석함" },
    { id: "goods", label: "칸나의 선물" },
  ];

  return (
    <header ref={headerRef} className={styles.container}>
      <a href="#hero">
        <Image
          width={76}
          height={39}
          className={styles.logo}
          src="/logo02.png"
          alt="The Finale"
        />
      </a>

      <nav>
        <ul className={styles.nav}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? styles.active : ""}
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
