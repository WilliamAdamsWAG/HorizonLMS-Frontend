import Login from "@/pages/Login.vue";
import Main from "@/pages/Main.vue";
import Wait from "@/pages/Wait.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Wait
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/source',
        component: Wait
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
