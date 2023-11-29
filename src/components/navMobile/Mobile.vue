<template>
    <nav class="mobile">
        <div class="mobile-btn">
            <router-link to="/"><img src="@/assets/images/home.svg" alt=""></router-link>
            <router-link to="/about"><img src="@/assets/images/User.svg" alt=""></router-link>
            <router-link to="/projects"><img src="@/assets/images/Bag.svg" alt=""></router-link>
            <router-link to="/contact"><img src="@/assets/images/Message.svg" alt=""></router-link>
            <router-link to="/tech"><img src="@/assets/images/gear.svg" alt=""></router-link>
            <!-- <a><img src="@/assets/images/More.svg" alt=""></a> -->
        </div>
    </nav>
    <!-- <div class="blob">
        <div class="effect"></div>
    </div> -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
.blob {
  background: linear-gradient(
    to right,
    #3F64E96E,
    #E93F3F6E,
    #FFB8006E
  );
  width: 600px; /* Adjust width as needed */
  height: 600px; /* Adjust height as needed */
  position: absolute;
//   left: 50%;
//   top: 50%;
    top: 0;
//   transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: rotate 17s infinite;
  filter: blur(120px);
  z-index: -999;
  display: none;
  opacity: 0;

  @media (max-width: 780px) {
    display: block;
    opacity: 1;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: scale(1) scaleY(1.25) rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>