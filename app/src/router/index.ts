import { createRouter, createWebHistory } from 'vue-router'

// Top Level Views
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'

// Craft Views
import CraftsView from '../views/CraftsView/CraftsView.vue'
import ArcadeMachineView from '@/views/CraftsView/ArcadeMachine/ArcadeMachineView.vue'

// Hardware Views
import HardwareProjectsView from '../views/HardwareProjectsView/HardwareProjectsView.vue'
import STM32SystemOnModuleView from '@/views/HardwareProjectsView/STM32_SoM/STM32SystemOnModuleView.vue'

// Tools Views
import ToolsView from '../views/ToolsView/ToolsView.vue'

const routes = [
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
  {
    path: '/hardware-projects',
    name: 'Hardware Projects',
    component: HardwareProjectsView
  },
  {
    path: '/hardware-projects/stm32-system-on-module',
    name: 'Hardware Projects - STM32 System-on-Module',
    component: STM32SystemOnModuleView
  },
  {
    path: '/tools',
    name: 'Tools',
    component: ToolsView
  },
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
