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
                        <img src="@/assets/images/Subbi.svg" alt="">
                        <h3>Subbi –– The free subscriptions manager</h3>
                        <p>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                        <a href="#">Visit site</a>
                    </div>
                    <img src="@/assets/images/Subbi.png" alt="" class="card-info-img">
                </div>
                <div class="card hidden">
                    <div class="card-info">
                        <img src="@/assets/images/Subbi.svg" alt="">
                        <h3>Subbi –– The free subscriptions manager</h3>
                        <p>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                        <a href="#">Visit site</a>
                    </div>
                    <img src="@/assets/images/Subbi.png" alt="" class="card-info-img">
                </div>
                <div class="card hidden">
                    <div class="card-info">
                        <img src="@/assets/images/Subbi.svg" alt="">
                        <h3>Subbi –– The free subscriptions manager</h3>
                        <p>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
                        <a href="#">Visit site</a>
                    </div>
                    <img src="@/assets/images/Subbi.png" alt="" class="card-info-img">
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
                    <img src="@/assets/images/virt-avatar.png" alt="" class="infocard-img">
                </router-link>
                <router-link to="/about" class="infocard">
                    <h3>Tech Stack</h3>
                    <p>The dev tools, apps, devices, and games I use and play.</p>
                    <img src="@/assets/images/tech-stack.svg" alt="" class="infocard-tech">
                </router-link>
                <router-link to="/about" class="infocard">
                    <h3>Contact me</h3>
                    <span>My contacts and social</span>
                    <img src="@/assets/images/phone.svg" alt="" class="infocard-img2">
                </router-link>
                <router-link to="/about" class="infocard">
                    <h3>Tech Stack</h3>
                    <p>The dev tools, apps, devices, and games I use and play.</p>
                    <img src="@/assets/images/tech-stack.svg" alt="" class="infocard-tech">
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
</style>