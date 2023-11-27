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
    <div class="blob">
        <div class="effect"></div>
    </div>
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
    height: 600px;
    aspect-ratio: 1;
    position: absolute;
    left: 50%;
    // top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    animation: rotate 17s infinite;
    filter: blur(120px);
    z-index: -999 !important;
    // position: fixed;
    top: 0;
    display: none;
    opacity: 0;
    @media (max-width: 780px){
        display: block !important;
        opacity: 1;
    }

}
.effect{
    z-index: -999 !important;
    
}
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