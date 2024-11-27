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
    <section class="wallpaper-with-logo-section">
        <video class="wallpaper-video" src="/assets/video/Airi_kanna_Last_Concert_wallpaper.mp4" alt="칸나 동영상" autoplay muted loop playinline></video>
        <img class="logo" src="/assets/image/The_finale_logo3.png"/>
        <div class="left-bar"></div>
        <div class="right-bar"></div>
        <div class="bottom-bar"></div>
        <p class="left-content">The last song</p>
        <p class="right-content">of Stellar</p>
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

    .wallpaper-with-time-section > .wallpaper-video {
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

    /* 세 번째 섹션 - 로고와 함께 있는 배너 */
    .wallpaper-with-logo-section {
        position: relative;
        width: 100%;
        height: 850px;
    }

    .wallpaper-with-logo-section > .wallpaper-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
    }

    .wallpaper-with-logo-section > .logo {
        position: absolute;
        top: 172px;
        left: calc(50% - 221.5px);
        width: 443px;
        height: 401px;
    }

    .wallpaper-with-logo-section > .left-bar,
    .wallpaper-with-logo-section > .right-bar {
        position: absolute;
        top: 375px;
        width: 53px;
        height: 2px;
        background-color: white;
    }
    
    .wallpaper-with-logo-section > .left-bar {
        left: 6.25%;
    }

    .wallpaper-with-logo-section > .right-bar {
        right: 6.25%;
    }

    .wallpaper-with-logo-section > .bottom-bar {
        position: absolute;
        left: calc(50% - 1px);
        bottom: 4.9%;
        width: 2px;
        height: 106px;
        background-color: white;
    }

    .wallpaper-with-logo-section > p {
        position: absolute;
        top: 367px;
        color: white;
        font-family: Raleway;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 4.81px;
    }

    .wallpaper-with-logo-section > p.left-content {
        left: 11.19%;
    }

    .wallpaper-with-logo-section > p.right-content {
        right: 11.19%;
    }
</style>

<style>
    @import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

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