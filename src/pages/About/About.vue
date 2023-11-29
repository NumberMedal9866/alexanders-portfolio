<template>
            <div class="logo-mob">
                <img src="@/assets/images/logoMob.svg" alt="">
            </div>
    <header class="header">
        <div class="header-text container">
            <h1>A little bit about me</h1>
            <span>Who am I and what do I do</span>
            <div class="effectt">
                <div ref="blob al" class="blobb al"></div>
            </div>
        </div>
        <div class="header-line"></div>
    </header>
    <main class="main container">
            <div class="main-text-holder container">
                <div class="main-text">
                    <h2>WHO AM I</h2>
                    <p>I’m <span class="main-text-highlight">Alexander</span>, a multi-disciplinary full stack developer, based in Uzbekistan, Tashkent 🇺🇿  </p>
                </div>
                <div class="main-text">
                    <h2>what do i do</h2>
                    <p>With over <span class="main-text-highlight">20 finished projects</span> behind my back, and invaluable experience I got while taking the proweb courses. I can accomplish any task, if I put my mind to it.<br>I have honored my skills in Vue.js, JavaScript, HTML and CSS/SCSS. Moreover, I have experience in operating with servers (sending, receiving and managing data).</p>
                </div>
                <div class="main-text">
                    <h2>what did i do</h2>
                    <p>I took proweb courses in <span class="main-text-highlight">"Web Programming"</span> for 10 months, while also working with the projects on the side.</p>
                </div>
                <div class="main-text">
                    <p>Always feel free to reach out to me via <a href="mailto: sstsoy1616@gmail.com">e-mail</a>, or follow me on <a href="twitter.com">Twitter</a>.</p>
                </div>
                <div class="main-text">
                    <p>Let's build something great, <br> P.S. this is my cat on the photo :)</p>
                </div>
                <div class="main-text-holder-div"><router-link to="/projects">See my work</router-link></div>
            </div>
            <div class="main-img container">
                <img src="@/assets/images/cat.jpg" alt="">
                <RouterLink to="/contact"><img src="@/assets/images/Send.svg" alt="">Get in touch</RouterLink>
            </div>
    </main>
    <div class="header-line sec"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>