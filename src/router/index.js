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
      path: '/modelo-de-multiples-canales-con-llegadas-poisson-tiempos-de-servicio-arbitrarios-y-sin-linea-de-espera',
      name: 'tema1',
      component: () => import('../views/Tema1View.vue')
    },
    {
      path: '/',
      name: 'tema2',
      component: () => import('../views/Tema2View.vue')
    },
    {
      path: '/',
      name: 'tema3',
      component: () => import('../views/Tema3View.vue')
    },
    {
      path: '/',
      name: 'tema4',
      component: () => import('../views/Tema4View.vue')
    },
    {
      path: '/',
      name: 'tema5',
      component: () => import('../views/Tema5View.vue')
    }
  ]
})

export default router
