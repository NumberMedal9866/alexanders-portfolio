<template>
    <div class="projects">
        <div class="projects-title container">
            <h1>Projects</h1>
            <span>Projects and ideas I’ve worked on</span>
        </div>
        <div class="header-line"></div>
            <div class="card-holder container top">
                <div class="card">
                    <div class="card-info">
                        <img src="@/assets/images/Subbi.svg" alt="">
                        <h3>Subbi –– The free subscriptions manager</h3>
                        <p>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                        <a href="https://note-vue-woad.vercel.app/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/Subbi.png" alt="" class="card-info-img">
                </div>
                <div class="card">
                    <div class="card-info">
                        <img src="@/assets/images/Subbi.svg" alt="">
                        <h3>Subbi –– The free subscriptions manager</h3>
                        <p>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                        <a href="https://chat-vue-flame.vercel.app/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/Subbi.png" alt="" class="card-info-img">
                </div>
                <div class="card">
                    <div class="card-info">
                        <img src="@/assets/images/Subbi.svg" alt="">
                        <h3>Subbi –– The free subscriptions manager</h3>
                        <p>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                        <a href="#" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/Subbi.png" alt="" class="card-info-img">
                </div>
            </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
 .projects{
    &-title{
        margin-bottom: 60px;
        span{
            color: #80808080;
            font-family: I4;
            font-weight: 400;
            font-size: 24px;
            letter-spacing: -0.456px;
            // @include media(500){
            //     font-size: 16px;
            // }
        }
    }
 }
 .top{
    margin-top: 60px;
 }
</style>