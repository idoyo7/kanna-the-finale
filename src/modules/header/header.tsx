"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollEvent = () => {
    if (window.scrollY >= 10) {
      headerRef.current?.classList.add(styles.withBg);
    } else {
      headerRef.current?.classList.remove(styles.withBg);
    }
  };

  // URL의 해시를 감지하여 active 상태 업데이트
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash.replace("#", ""));
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // 초기화

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    scrollEvent();
    document.addEventListener("scroll", scrollEvent);

    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, []);

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
          <li>
            <a
              href="#main"
              className={activeSection === "main" ? styles.active : ""}
            >
              메인
            </a>
          </li>
          <li>
            <a
              href="#pv"
              className={activeSection === "pv" ? styles.active : ""}
            >
              PV
            </a>
          </li>
          <li>
            <a
              href="#history"
              className={activeSection === "history" ? styles.active : ""}
            >
              보석함
            </a>
          </li>
          <li>
            <a
              href="#goods"
              className={activeSection === "goods" ? styles.active : ""}
            >
              칸나의 선물
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
