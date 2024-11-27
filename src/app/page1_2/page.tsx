'use client';

import styles from './styles.module.css';

function Page1_2() {
    return (
        <div>
            <iframe 
                style={{
                    width: '50vw',
                    height: '28.125vw' // 16:9 비율 유지 (50 * 9/16 = 28.125)
                }}
                src="https://www.youtube.com/embed/eNbB4MWbZAI?si=h533Mfxfezmu8vzi" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Page1_2;
