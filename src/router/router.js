import { createRouter, createWebHashHistory } from 'vue-router'
import Authorization from "@/pages/Authorization"
import Disk from "@/pages/Disk"
import About from "@/pages/About"
const routes = [
    {
        path: '/',
        component: Authorization
    },
    {
        path: '/disk',
        component: Disk
    },
    {
        path: '/about/:id',
        component: About
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;