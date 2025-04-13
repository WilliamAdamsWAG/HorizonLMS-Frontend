import Login from "@/pages/Login.vue";
import Main from "@/pages/Main.vue";
import Wait from "@/pages/Wait.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/source',
        component: Main
    },
    {
        path: '/app',
        component: Wait
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
