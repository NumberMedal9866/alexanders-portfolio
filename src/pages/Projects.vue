<template>
            <div class="logo-mob">
                <img src="@/assets/images/logoMob.svg" alt="">
            </div>
    <div class="projects">
        <div class="projects-title container">
            <h1>Projects</h1>
            <span>Projects and ideas I’ve worked on</span>
            <div class="effectt">
                <div ref="blob al" class="blobb al"></div>
            </div>
        </div>
        <div class="header-line"></div>
            <div class="card-holder container top">
                <div class="card">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>CinePile - Online movie news site</h3>
                        <p>CinePhile - one of my biggest projects that I've buit yet, built on the latest techlonogies like: Vue.js on composition api, vite builder, axios and pinia. Using an open source database, my website gets all the latest data autonomically.</p>
                        <a href="https://vuecinephile.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/logo.svg" alt="" class="card-info-img proj">
                </div>
                <div class="card">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>PearMarket -online store</h3>
                        <p>PearMarket is my diploma project that I've built from scratch by myself. I take all the data from the open source service, called dummy.jsom. Everyting is processed dynamically,as all the web programs should. All your personal data is stored in Local Storage, so even if you refresh the page, all your data is stored</p>
                        <a href="https://pearmarket.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/pearlogo.png" alt="" class="card-info-img project">
                </div>
                <div class="card">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>Note App</h3>
                        <p>Responsive web application with two implemented languages. The project is operated on options api, saving everything using local storage</p>
                        <a href="https://pearmarket.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/note.svg" alt="" class="card-info-img proj">
                </div>
                <div class="card">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>Chat vue - unlocking the full pottential of options api</h3>
                        <p>One of the most difficult projects I've done, so far. Using options api is really difficult to achieve the set goals, however, it works and I hope you'll like it</p>
                        <a href="https://pearmarket.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/chat.svg" alt="" class="card-info-img proj">
                </div>
                <div class="card">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>VUE cinemas - simple, single page website</h3>
                        <p>I have a required skillset to make simple singlepaged website using only HTML and CSS</p>
                        <a href="https://pearmarket.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/cin.svg" alt="" class="card-info-img proj">
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
 .proj{
    position: inherit;
    width: 315px;
    margin-left: 100px;
    padding: 20px;
    border-radius: 32px;
    border: 1px solid #383737;
 }
 .project{
    position: inherit;
    width: 280px;
    // height: 200px;
    margin-left: 100px;
    padding: 60px;
    border-radius: 32px;
    border: 1px solid #383737;
    background: white;
 }
 .projects-title{
    position: relative;
    overflow-x: clip;
 }
</style>