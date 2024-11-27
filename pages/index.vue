<template>
    <section class="wallpaper-with-time-section">
        <video class="wallpaper-video" src="/assets/video/Airi_kanna_Last_Concert_wallpaper.mp4" alt="칸나 동영상" autoplay muted loop playinline></video>
        <div class="wallpaper-info-wrap">
            <p class="count-down-day">D-05</p>
            <p class="count-down-time">17:56:59</p>
            <p class="wallpaper-title">COMING SOON</p>
            <p class="wallpaper-sub">마지막 별의 노래가 다가오는 날</p>
        </div>
    </section>
    <section class="concert-title-section">
        <p class="title">The Finale</p>
        <p class="title-sub">The last song of Stellar</p>
        <p class="info">아이리 칸나의 마지막 콘서트</p>
    </section>
</template>

<style scoped>
    /* 최대 너비를 1920px로 설정 */
    section {
        max-width: 1920px;
    }

    /* 첫 번째 섹션 - 디데이 카운트 있는 배너 */
    .wallpaper-with-time-section {
        width: 100%;
        height: 878px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wallpaper-video {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
    }

    .wallpaper-info-wrap {
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        color: white;
        font-family: WantedSansVariable;
    }

    .count-down-day {
        align-self: flex-start;

        font-size: min(3.12vw, 60px);
        letter-spacing: -3px;
        line-height: 100%;
    }

    .count-down-time {
        margin-bottom: 40px;

        font-size: min(12.5vw, 240px);
        letter-spacing: -12px;
        line-height: 80%;
    }

    .wallpaper-title {
        font-size: min(1.51vw, 29px);
        letter-spacing: 8.41px;
        font-weight: 600;
    }

    .wallpaper-sub {
        font-size: min(0.93vw, 18px);
        letter-spacing: -0.54px;
        font-weigth: 600;
    }

    /* 두 번째 섹션 - The Finale */
    .concert-title-section {
        width: 100%;
        height: 249px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
    }
    
    .concert-title-section > .title {
        color: white;
        font-family: Playfair Display;
        font-size: min(3.43vw, 66px);
        font-weight: 700;
        letter-spacing: 0.33px;
        margin-bottom: 5px;
    }

    .concert-title-section > .title-sub {
        color: #777;
        font-family: Georgia;
        font-size: min(0.83vw, 16px);
        font-weight: 400;
        letter-spacing: 6.72px;
        margin-bottom: 25px;
    }

    .concert-title-section > .info {
        color: #CAC9D9;
        font-family: Nanum Myeongjo;
        font-size: min(1.35vw, 26px);
        font-weight: 700;
    }
</style>

<style>
    @import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
    @import url('https://cdn.jsdelivr.net/npm/pretendard/dist/pretendard.css');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');

    body,
    p {
        margin: 0;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>