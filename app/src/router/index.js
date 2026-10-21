import { createRouter, createWebHistory } from 'vue-router'

// Top Level Views
import AboutView from '@/views/AboutView/About.vue'
import HomeView from '@/views/Home.vue'

// Craft Views
import CraftsView from '@/views/CraftsView/Crafts.vue'
import ArcadeMachineView from '@/views/CraftsView/ArcadeMachineView/ArcadeMachine.vue'

// Hardware Views
import HardwareProjectsView from '@/views/HardwareProjectsView/HardwareProjects.vue'
import STM32SoMView from '@/views/HardwareProjectsView/STM32SoMView/STM32SoM.vue'

////////////////////////////////////////////////////////////////////////////////////////////////////
const routes = [
  // Top Level Views
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },

  // Craft Views
  {
    path: '/crafts',
    name: 'Crafts',
    component: CraftsView
  },
  {
    path: '/crafts/arcade-machine',
    name: 'Crafts - Arcade Machine',
    component: ArcadeMachineView
  },

  // Hardware Project Views
  {
    path: '/hardware-projects',
    name: 'Hardware Projects',
    component: HardwareProjectsView
  },
  {
    path: '/hardware-projects/stm32-som',
    name: 'Hardware Projects - STM32 SoM',
    component: STM32SoMView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
