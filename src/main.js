import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
// import emailjs from '@emailjs/browser';
// import { blob } from './fofflow'


import App from './App.vue'
import '@/assets/styles/main.scss'

createApp(App)
.use(router)
.use(createPinia())
// .use(emailjs)
// .use(blob)



.mount('#app')
