import { createRouter,createWebHistory } from "vue-router";
import Home from '@/pages/Home/Home.vue'
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'homepage', component: Home},
        {path: '/about', name: 'about', component: () => import('@/pages/About/About.vue')},
        {path: '/projects', name: 'projects', component: () => import('@/pages/Projects.vue')},
        {path: '/contact', name: 'contact', component: () => import('@/pages/Contact/Contact.vue')},
        {path: '/tech', name: 'tech', component: () => import('@/pages/Tech/Tech.vue')},
    ]
})