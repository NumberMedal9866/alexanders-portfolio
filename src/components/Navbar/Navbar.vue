<template>
    <div class="container nav1">
        <nav class="nav">
            <ul>
                <li><router-link to="/" class="nill"><img src="@/assets/images/logo-no-background.svg" alt=""></router-link></li>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Work</router-link></li>
                <li><router-link to="/tech">Tech</router-link></li>
                <li><router-link to="/Contact">Contact</router-link></li>
            </ul>
            <div class="nav-item">
                <div class="nav-item-links">
                    <a href="https://github.com/NumberMedal9866" target="_blank"><img src="@/assets/images/github.svg" alt=""></a>
                    <a href="https://t.me/s/barsushe" target="_blank"><img src="@/assets/images/tg.svg" alt=""></a>
                    <a href="https://twitter.com/alexander_webdv" target="_blank"><img src="@/assets/images/twitter.svg" alt=""></a>                   
                </div>
                <img src="@/assets/images/Sun.svg" class="nav-item-links-theme" alt="" v-if="sdf">
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>