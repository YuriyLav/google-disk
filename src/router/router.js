import { createRouter, createWebHashHistory } from 'vue-router'
import Authorization from "@/pages/Authorization"
import Disk from "@/pages/Disk"
import AboutFile from "@/pages/AboutFile"
import AboutFolder from "@/pages/AboutFolder"
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
        path: '/about_file/:id',
        component: AboutFile
    },
    {
        path: '/folder/:id',
        component: AboutFolder
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;