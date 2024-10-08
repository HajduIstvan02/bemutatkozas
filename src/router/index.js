import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/alex',
      name: 'alex',
      component: () => import('../views/Alex.vue')
    },
    {
      path: '/istvan',
      name: 'istvan',
      component: () => import('../views/Istvan.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/notFound.vue')
    },
  ]
})

export default router
