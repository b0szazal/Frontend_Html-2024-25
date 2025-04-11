import { createRouter, createWebHistory } from 'vue-router'
import LottoView from '@/views/LottoView.vue'
import GamesView from '@/views/GamesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LottoView,
    },
    {
      path: '/play',
      name: 'about',
      component: GamesView
    },
  ],
})

export default router
