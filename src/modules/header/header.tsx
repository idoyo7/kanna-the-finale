import Image from "next/image";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <Image
        width={384}
        height={197}
        className={styles.logo}
        src="/logo02.png"
        alt="The Finale"
      />

      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="#">메인화면</a>
          </li>
          <li>
            <a href="#">PV</a>
          </li>
          <li>
            <a href="#">보석함</a>
          </li>
          <li>
            <a href="#">칸나의 선물</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
