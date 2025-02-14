import AddPlantPage from '@/views/addPlantPage.vue'
import PlantsPage from '@/views/plantsPage.vue'
import UpdatePlantPage from '@/views/updatePlantPage.vue'
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
    },
    {
      path: '/editplant',
      component: UpdatePlantPage
    }
  ],
})

export default router
