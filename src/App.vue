<template>
  <Mobile/>
  <Navbar/>
  <RouterView/>
  <Footer/>
  <div class="effect">
    <div ref="blob" class="blob"></div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import Mobile from './components/navMobile/Mobile.vue';
import Footer from './components/Footer/Footer.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import Velocity from 'velocity-animate';

const blob = ref(null);

const moveBlob = (event) => {
  const { pageX, pageY } = event;
  blob.value.animate(
    {
      left: `${pageX}px`,
      top: `${pageY}px`,
    },
    { duration: 4000, fill: 'forwards' }
  );
};
const handleScroll = (event) => {
  const pageX = null; // Adjust for viewport center
  const pageY = window.scrollY + window.innerHeight / 2; // Adjust for viewport center
  // Use pageX and pageY values as needed
    blob.value.animate(
    {
      // left: `${pageX}px`,
      top: `${pageY}px`,
    },
    { duration: 2000, fill: 'forwards' }
  );
};

onMounted(() => {
  document.addEventListener('mousemove', moveBlob);
  document.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', moveBlob);
  document.removeEventListener('scroll', handleScroll);
});
</script>



<style lang="scss" scoped>
.blob {
    background: linear-gradient(
        to right,
        #3F64E96E,
        #E93F3F6E,
        #FFB8006E
    );
    height: 600px;
    aspect-ratio: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    animation: rotate 20s infinite;
    filter: blur(120px);
    z-index: -999 !important;

}
.effect{
    z-index: -999 !important;
    @media screen and (max-width: 780px){
      display: none;
    }
}
/* #blur{
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    backdrop-filter: blur(100px);
} */


@keyframes rotate {
    from{
        rotate: 0deg;
    }
    50%{
        scale: 1 1.25;
    }
    to{
        rotate: 360deg;
    }
}

</style>