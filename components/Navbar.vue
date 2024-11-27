<template>
    <header>
        <img class="header-logo" src="" alt="logo"/>
        <ul class="header-menu">
            <li><a href="#">메인화면</a></li>
            <li><a href="#">PV</a></li>
            <li><a href="#">보석함</a></li>
            <li><a href="#">칸나의 선물</a></li>
        </ul>
    </header>
</template>


<style scoped>
    header {
        width: 100%;
        height: 63px;
        padding: 10px 80px;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: #000;
    }

    .header-logo {
        width: 83px;
        height: 43px;
        background-color: red;
    }

    .header-menu {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 40px;

        padding-inline-start: 0;
        margin-block-start: 0;
        margin-block-end: 0;

        list-style: none;
    }

    .header-menu > li > a {
        color: rgba(255, 255, 255, 0.48);
        font-family: "Wanted Sans";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.6px;

        text-decoration: none;
        transition: color 0.2s;
    }

    .header-menu > li > a:hover {
        color: #FFF;
        font-weight: 600;
    }
</style>