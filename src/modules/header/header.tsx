"use client";
import styles from "./styles.module.css";

function Header() {
    return (
        <header className={styles.container}>
            <img className={styles.logo} src="logo02.png" alt="logo"/>
            <nav>
                <ul className={styles.nav}>
                    <li><a href="#">메인화면</a></li>
                    <li><a href="#">PV</a></li>
                    <li><a href="#">보석함</a></li>
                    <li><a href="#">칸나의 선물</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;