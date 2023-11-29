<template>
    <div class="logo-mob">
        <img src="@/assets/images/logoMob.svg" alt="">
    </div>
    <div class="contact-header container">
        <h1>Get in touch</h1>
        <span>Let's build awesome.</span>
            <div class="effectt">
                <div ref="blob al" class="blobb al"></div>
            </div>
    </div>
    <div class="header-line"></div>
    <div class="container">
        <div class="message">
            <div class="message-nav">
                <img src="@/assets/images/mac.svg" alt="">
                <p>New message</p>
            </div>
            <div class="message-main">
                <form @submit.prevent="handleSubmit" ref="form">
                    <div class="message-main-input">
                        <span>Email:</span>
                        <input type="email" placeholder="Enter your email adress" required name="email">
                    </div>
                    <div class="message-main-input">
                        <span>Name:</span>
                        <input type="text" placeholder="Enter your name" required name="name">
                    </div>
                    <div class="message-main-input">
                        <span>Number:</span>
                        <input type="number" placeholder="Enter your phone nubmer" required name="number">
                    </div>
                    <textarea id="1" cols="30" rows="10" placeholder="Write your message here" required name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref(null);

const handleSubmit = () => {
    setTimeout(() => {
        emailjs.sendForm('service_g5afzjp', 'template_dbx3kjh', form.value, 'D9IhY7x-ylH7EhbZQ')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            alert("Your From has been submitted, please wait for me to get in touch with you")
        })
        .catch((error) => {
            console.log('FAILED...', error.text);
        });
        // form.value=''
        // window.location.reload()
    }, 2000);
}
</script>

<style lang="scss" scoped>

</style>