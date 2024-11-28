"use client";

import styles from './styles.module.css';
import { useState } from 'react';
import Modal from 'react-modal';

export default function Page10() {
    const [firstModalOpen, setFirstModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);

    const openFirstModal = () => setFirstModalOpen(true);
    const closeFirstModal = () => setFirstModalOpen(false);

    const openSecondModal = () => setSecondModalOpen(true);
    const closeSecondModal = () => setSecondModalOpen(false);

    Modal.setAppElement('#share');

    return (
        <div className={styles.container}>
            <div className={styles.title}>선물함</div>
            <div className={styles.giftboxContainer}>
                <div 
                    className={styles.giftbox}
                    onClick={openFirstModal}
                >
                    <img src="/gift2.jpg" alt="gift" style={{width: '22.5vh', height: '22.5vh', margin: '2.5%'}} />
                    <div className={styles.giftboxTitle}>[기간한정] 아이리 칸나 모바일, 탭 배경화면 공유 </div>
                </div>
                <div 
                    className={styles.giftbox}
                    onClick={openSecondModal}
                >
                    <img src="/gift1.jpg" alt="gift" style={{width: '22.5vh', height: '22.5vh', margin: '2.5%'}} />
                    <div className={styles.giftboxTitle}>[기간한정] 아이리 칸나 월페이퍼 공유 </div>
                </div>
            </div>

            <Modal
                isOpen={firstModalOpen}
                onRequestClose={closeFirstModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        width: '70vw',
                        height: '85vh',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}
            >
                <div className={styles.contentWrapper} data-lenis-prevent="true">
                    <button onClick={() => setFirstModalOpen(false)} className={styles.xMark}/>
                    <p className={`${styles.contentTitle} ${styles.marginBottom2}`}>
                        [기간한정] 아이리칸나 모바일, 탭 배경화면 공유
                    </p>
                    <p className={`${styles.cotentSubTitle} ${styles.marginBottom1}`}>
                        칸나와 뜨거웠던 여름을 배경화면으로 간직하세요!
                    </p>
                    <img
                        src='/gift2_wide.png'
                        alt='gift2_wide'
                        style={{ width: '50vw', height: 'auto', alignSelf: 'center' }}
                        className={styles.marginBottom3}
                    />
                    <p className={`${styles.contents} ${styles.marginBottom2}`}>
                        #칸나와의_여름을_함께
                    </p>
                    <p className={`${styles.contents} ${styles.marginBottom1}`}>
                        아래 링크에서 파일을 다운 받으실 수 있습니다. (종류에 따라 사이즈가 다릅니다.)
                    </p>
                    <p className={`${styles.contents} ${styles.marginBottom05}`}>
                        [안드로이드]
                    </p>
                    <div className={styles.paddingBottom2}>
                        <a 
                            href='https://drive.google.com/file/d/1jIsyvxu5B9CO5ahH5JpYKVXh37qo8j3e/view?usp=sharing'
                            className={`${styles.downloadBtn} ${styles.marginBottom1}`}
                            target='_blank'
                        >
                            &#x1F4CE;칸나와_여름을_함께_안드.png (7.75MB)
                        </a>
                    </div>
                    <p className={`${styles.contents} ${styles.marginBottom05}`}>
                        [아이폰]
                    </p>
                    <div className={styles.paddingBottom2}>
                        <a
                            href='https://drive.google.com/file/d/1UkBPu8-OCWM0qWLSJDxmvzuTclLTJBCS/view?usp=sharing'
                            className={`${styles.downloadBtn}`}
                            target='_blank'
                        >
                            &#x1F4CE;칸나와_여름을_함께_아이폰.png (3.82MB)
                        </a>
                    </div>
                    <p className={`${styles.contents} ${styles.marginBottom05}`}>
                        [아이폰]
                    </p>
                    <div className={styles.paddingBottom2}>
                        <a 
                            href='https://drive.google.com/file/d/1SLgZ7hIfvnzva0nZ9AdTAtUw6kSZ2DQw/view?usp=sharing'
                            className={`${styles.downloadBtn}`}
                            target='_blank'
                        >
                            &#x1F4CE;칸나와_여름을_함께.png (4.97MB)
                        </a>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={secondModalOpen}
                onRequestClose={closeSecondModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        width: '70vw',
                        height: '85vh',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }
                }}
            >
                <div className={styles.contentWrapper} data-lenis-prevent="true">
                    <button onClick={() => setSecondModalOpen(false)} className={styles.xMark}/>
                    <p className={`${styles.contentTitle} ${styles.marginBottom2}`}>
                        [기간한정] 아이리칸나 월페이퍼 공유
                    </p>
                    <p className={`${styles.cotentSubTitle} ${styles.marginBottom2}`}>
                        아이라 칸나 월페이퍼를 배포합니다!<br />
                        여러분이 있어 가장 빛났던 칸나의 모습을 간직하세요
                    </p>
                    <img
                        src='/gift1.jpg'
                        alt='gift1'
                        style={{ width: '40vw', height: 'auto', alignSelf: 'center' }}
                        className={styles.marginBottom3}
                    />
                    <p className={`${styles.contents} ${styles.marginBottom2}`}>
                        #여러분의 가장 가까운 곳에서 영원히 빛날 수 있도록<br/ >
                        #칸나와의_마지막_순간을 함께
                    </p>
                    <p className={`${styles.contents} ${styles.marginBottom1}`}>
                        아래 드라이브에서 다운 받으실 수 있습니다. (아래 링크 모두 동일한 파일입니다.)
                    </p>
                    <p className={`${styles.contents} ${styles.marginBottom05}`}>
                        [다운로드1]
                    </p>
                    <div className={styles.paddingBottom2}>
                        <a 
                            href='https://drive.google.com/file/d/1xL29q3G0NzwWow--xQ0OWPd9VCErhGLV/view?usp=sharing'
                            className={`${styles.downloadBtn} ${styles.marginBottom1}`}
                            target='_blank'
                        >
                            &#x1F4CE; 칸나 월페이퍼 드라이브 링크 1
                        </a>
                    </div>
                    <p className={`${styles.contents} ${styles.marginBottom05}`}>
                        [다운로드2]
                    </p>
                    <div className={styles.paddingBottom2}>
                        <a
                            href='https://drive.google.com/file/d/1GlfxncjS1zu09YpGr4Fp9vkCu_F7R1WO/view?usp=sharing'
                            className={`${styles.downloadBtn}`}
                            target='_blank'
                        >
                            &#x1F4CE; 칸나 월페이퍼 드라이브 링크 2
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
