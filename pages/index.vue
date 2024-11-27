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
</template>

<style scoped>
    section {
        max-width: 1920px;
    }

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
</style>

<style>
    @import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
    @import url('//fonts.googleapis.com/earlyaccess/nanummyeongjo.css');
    @import url('https://cdn.jsdelivr.net/npm/pretendard/dist/pretendard.css');

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