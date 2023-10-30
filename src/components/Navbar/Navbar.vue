<template>
    <div class="container nav1">
        <nav class="nav">
            <ul>
                <li><router-link to="/"><img src="@/assets/images/logo-no-background.svg" alt=""></router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Work</router-link></li>
                <li><router-link to="/tech">Tech</router-link></li>
                <li><router-link to="/Contact">Contact</router-link></li>
            </ul>
            <div class="nav-item">
                <div class="nav-item-links">
                    <img src="@/assets/images/github.svg" alt="">
                    <img src="@/assets/images/in.svg" alt="">
                    <img src="@/assets/images/twitter.svg" alt="">
                </div>
                <img src="@/assets/images/sun.svg" class="nav-item-links-theme" alt="">
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>