import styles from './styles.module.css';

function Page9() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>선물함</div>
            <div>
                <div className={styles.giftbox}>
                    <img src="/gift.png" alt="gift" />
                    <div>[기간한정] 아이리 칸나 모바일, 탭 배경화면 공유 </div>
                </div>
                <div className={styles.giftbox}>
                    <img src="/gift.png" alt="gift" />
                    <div>[기간한정] 아이리 칸나 월페이퍼 공유 </div>
                </div>
            </div>
        </div>
    );
}

export default Page9;