import AddPlantPage from '@/views/addPlantPage.vue'
import PlantsPage from '@/views/plantsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PlantsPage,
    },
    {
      path: '/addplant',
      component: AddPlantPage
    }
  ],
})

export default router
