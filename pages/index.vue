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
    <section class="concert-pv-section">
        <iframe width="1280" height="717.657" src="https://www.youtube.com/embed/eNbB4MWbZAI?si=4UikFCQa9Bw4ehbl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
    <section class="letter-content-section">
        <p>누군가에게 꿈이 되고 싶었던, 항상 높은 곳에서 빝나길 바랐던 소녀는 말해왔습니다.</p>
        <p class="highlight">“그야 나는 별이니까”</p>
        <p>가장 빛나는 별이 되기 위해 매번 죽을 힘을 다해 노래하던 소녀는 행복했습니다.<br>
        소녀는 항상 빛날 수 있는 것만 같았습니다.<br>
        하지만, 그녀의 빛이 커질수록 그림자도 커져만 갔습니다.<br>
        언제나 위를 보고 달리던 그녀는 수차례 넘어졌고, 때로는 포기하고 싶기도 했습니다.</p>
        <p>그렇게 그림자 속에서 처음으로 위가 아닌 주변을 둘러보았을 때, 그녀는 깨달았습니다.<br>
        이미 주변에는 수많은 별들이 함께 빛나고 있다는 것을.<br>
        별은 서로 속에서, 서로를 비추어 줄 때 가장 아름답게 빛난다는 것을요.</p>
        <p>이제 마지막 무대를 앞둔, 가장 아름답게 빝나는 별이 우리에게 말합니다.</p>
        <p class="highlight">“우린 모두 별이니까”</p>
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

        font-size: 60px;
        letter-spacing: -3px;
        line-height: 100%;
    }

    .count-down-time {
        margin-bottom: 40px;

        font-size: 240px;
        letter-spacing: -12px;
        line-height: 80%;
    }

    .wallpaper-title {
        font-size: 29px;
        letter-spacing: 8.41px;
        font-weight: 600;
    }

    .wallpaper-sub {
        font-size: 18px;
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
        font-size: 66px;
        font-weight: 700;
        letter-spacing: 0.33px;
        margin-bottom: 5px;
    }

    .concert-title-section > .title-sub {
        color: #777;
        font-family: Georgia;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 6.72px;
        margin-bottom: 25px;
    }

    .concert-title-section > .info {
        color: #CAC9D9;
        font-family: Nanum Myeongjo;
        font-size: 26px;
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

    /* 네 번째 섹션 - 콘서트 PV */
    .concert-pv-section {
        width: 100%;
        height: 1080px;
        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;
        
        padding: 154px 0 208.343px 0;
        box-sizing: border-box;
    }
    
    /* 다섯 번째 섹션 - 편지 */
    .letter-content-section {
        width: 100%;
        height: 557px;
        background-color: #5E41B7;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 28px;
        
        color: white;
        font-family: Noto Serif KR;
        font-size: 17px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: -1.02px;
        text-align: center;
    }

    .letter-content-section > .highlight {
        font-size: 19px;
        font-weight: 900;
        letter-spacing: -1.14px;
    }
</style>

<style>
    @import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Noto+Serif+KR:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

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