<template>
    <div class="logo-mob">
        <img src="@/assets/images/logoMob.svg" alt="">
    </div>
    <div class="contact-header container">
        <h1>Get in touch</h1>
        <span>Let's build awesome.</span>
    </div>
    <div class="header-line"></div>
    <div class="container">
        <div class="message">
            <div class="message-nav">
                <img src="@/assets/images/mac.svg" alt="">
                <p>New message</p>
            </div>
            <div class="message-main">
                <form action="submit">
                    <div class="message-main-input">
                        <span>Email:</span>
                        <input type="text" placeholder="Enter your email adress" required>
                    </div>
                    <div class="message-main-input">
                        <span>Name:</span>
                        <input type="text" placeholder="Enter your name">
                    </div>
                    <div class="message-main-input">
                        <span>Subject:</span>
                        <input type="text" placeholder="Enter your subject">
                    </div>
                    <textarea name="lol" id="1" cols="30" rows="10" placeholder="Write your message here" required></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>