"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import styles from "./styles.module.css";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  const scrollEvent = () => {
    if (window.scrollY >= 10) {
      headerRef.current?.classList.add(styles.withBg);
    } else {
      headerRef.current?.classList.remove(styles.withBg);
    }
  };

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
            <a href="#main">메인</a>
          </li>
          <li>
            <a href="#pv">PV</a>
          </li>
          <li>
            <a href="#history">보석함</a>
          </li>
          <li>
            <a href="#goods">칸나의 선물</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
