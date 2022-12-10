import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {path: '/', name: 'home', component: HomeView},
    {path: '/about', name: 'about', component: () => import('../views/AboutView')},
    {path: '/sxh', name: 'sxh', component: () => import('../views/Sxh')},
    {path: '/:pathMatch(.*)*', name: '404', component: () => import('../views/404')}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
