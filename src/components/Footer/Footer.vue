<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-holder">
                <div class="footer-logo">
                    <img src="@/assets/images/logo-no-background.svg" alt="">
                    <span>© 2023 Tsoy Alexander. All Rights Reserved.</span>
                </div>
                <div class="footer-ul">
                    <ul>
                        <li class="first">Links</li>
                        <router-link to="/about">About</router-link>
                        <router-link to="/projects">Work</router-link>
                        <router-link to="/tech">Tech Stack</router-link>
                        <router-link to="/contact">Contact</router-link>
                    </ul>
                    <ul>
                        <li class="first">Elsewhere</li>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Discord</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
          <div class="effectt">
            <div ref="blob" class="blobb alt"></div>
          </div>
        <!-- <img src="@/assets/image/blur.png" alt="" class="blurry"> -->
    </footer>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .hide{
        width: max-content;
        display: none;
    }
</style>