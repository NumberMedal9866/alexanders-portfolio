<template>
            <div class="logo-mob">
                <img src="@/assets/images/logoMob.svg" alt="">
            </div>
    <header class="headerr container">
        <div class="container">
            <div class="title">
                <h1>I'm</h1>
                <h1>Alexander</h1>
            </div>
            <div class="title-ad">
                <div class="title-ad-f">
                    <h3>Hi</h3>
                    <img src="@/assets/images/hand.png" alt="">
                </div>
                <div class="title-ad-s">
                    <h3>I'm</h3>
                    <span>Alexander</span>
                <div class="effectt">
                    <div ref="blob al" class="blobb al"></div>
                </div>
                </div>
            </div>
            <p>A front-end engineer and UI/UX designer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.</p>
            <div class="btn-holder">
                <div><router-link to="/projects">See my work</router-link></div>
                <div><router-link to="/contact">Get in touch</router-link></div>
            </div>
            <img class="avatar" src="@/assets/images/ava.png" alt="">
        </div>
    </header>
    <!-- тут я удалииииллллл -->
    <section class="container"> 
        <div class="container">
            <h2 class="work">Selected Work</h2>
            <div class="card-holder">
                <div class="card hidden">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>CinePile - Online movie news site</h3>
                        <p>CinePhile - one of my biggest projects that I've buit yet, built on the latest techlonogies like: Vue.js on composition api, vite builder, axios and pinia. Using an open source database, my website gets all the latest data autonomically.</p>
                        <a href="https://vuecinephile.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/logo.svg" alt="" class="card-info-img proj">
                </div>
                <div class="card hidden">
                    <div class="card-info">
                        <!-- <img src="@/assets/images/Subbi.svg" alt=""> -->
                        <h3>PearMarket -online store</h3>
                        <p>PearMarket is my diploma project that I've built from scratch by myself. I take all the data from the open source service, called dummy.jsom. Everyting is processed dynamically,as all the web programs should. All your personal data is stored in Local Storage, so even if you refresh the page, all your data is stored</p>
                        <a href="https://pearmarket.vercel.app/#/" target="_blank">Visit site</a>
                    </div>
                    <img src="@/assets/images/pearlogo.png" alt="" class="card-info-img project">
                </div>

            </div>
        </div>
    </section>
    <section class="about container">
        <div class="container">
            <h2 class="card-catalog-title">Get to know me</h2>
            <div class="card-catalog">
                <router-link to="/about" class="infocard">
                    <h3>About me</h3>
                    <span>Who I am and what I do</span>
                    <img src="@/assets/images/avaa.png" alt="" class="infocard-img">
                </router-link>
                <router-link to="/tech" class="infocard">
                    <h3>Tech Stack</h3>
                    <p>The dev tools, apps, devices, and games I use and play.</p>
                    <img src="@/assets/images/tech-stack.svg" alt="" class="infocard-tech">
                </router-link>
                <router-link to="/contact" class="infocard">
                    <h3>Contact me</h3>
                    <span>My contacts and social</span>
                    <img src="@/assets/images/phone.svg" alt="" class="infocard-img2">
                </router-link>
                <router-link to="/about" class="infocard">
                    <h3>My list of projects</h3>
                    <p>All of my finished projects</p>
                    <img src="@/assets/images/proj.svg" alt="" class="infocard-proj">
                </router-link>
            </div>
        </div>
    </section>

</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

const observer = ref(null); // Initialize the observer as null

// Define a function to initialize the Intersection Observer
const initializeObserver = () => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
};

// Call the initializeObserver function when the component is mounted
onMounted(() => {
  initializeObserver();
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.value.observe(el));
});

// Clean up the observer when the component is unmounted
onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style lang="scss" scoped>
    .sdf{
        color: red;
    }
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
</style>