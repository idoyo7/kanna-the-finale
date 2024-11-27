import styles from './styles.module.css';

function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.title}>The Final</div>
                <div className={styles.subtitle}>The Last Song of Stellar</div>
                <div className={styles.description}>아이리 칸나의 마지막 콘서트</div>
            </div>
        </div>
    );
}

export default Banner;