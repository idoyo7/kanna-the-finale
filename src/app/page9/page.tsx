import styles from './styles.module.css';

function Page9() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>선물함</div>
            <div className={styles.giftboxContainer}>
                <div className={styles.giftbox}>
                    <img src="/gift1.jpg" alt="gift" style={{width: '22.5vh', height: '22.5vh', margin: '2.5%'}} />
                    <div className={styles.giftboxTitle}>[기간한정] 아이리 칸나 모바일, 탭 배경화면 공유 </div>
                </div>
                <div className={styles.giftbox}>
                    <img src="/gift2.jpg" alt="gift" style={{width: '22.5vh', height: '22.5vh', margin: '2.5%'}} />
                    <div className={styles.giftboxTitle}>[기간한정] 아이리 칸나 월페이퍼 공유 </div>
                </div>
            </div>
        </div>
    );
}

export default Page9;