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
      path: '/tema1',
      redirect: { name: 'tema1' }
    },
    {
      path: '/modelo-de-multiples-canales-con-llegadas-poisson-tiempos-de-servicio-arbitrarios-y-sin-linea-de-espera',
      name: 'tema1',
      component: () => import('../views/Tema1View.vue')
    },
    {
      path: '/tema2',
      redirect: { name: 'tema2' }
    },
    {
      path: '/modelo-con-multiples-servidores',
      name: 'tema2',
      component: () => import('../views/Tema2View.vue')
    },
    {
      path: '/tema3',
      redirect: { name: 'tema3' }
    },
    {
      path: '/llegadas-markovianas-tiempo-de-servicio-con-distribucion-general-c-servidores',
      name: 'tema3',
      component: () => import('../views/Tema3View.vue')
    },
    {
      path: '/tema4',
      redirect: { name: 'tema4' }
    },
    {
      path: '/llegadas-y-tiempo-de-servicio-con-distribucion-general-c-servidores',
      name: 'tema4',
      component: () => import('../views/Tema4View.vue')
    },
    {
      path: '/tema5',
      redirect: { name: 'tema5' }
    },
    {
      path: '/llegadas-markovianas-tiempo-de-servicio-exponencial-infinitos-servidores',
      name: 'tema5',
      component: () => import('../views/Tema5View.vue')
    }
  ]
})

export default router
