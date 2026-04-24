import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import ArcadeMachineView from '../views/CraftsView/ArcadeMachineView.vue'
import CraftsView from '../views/CraftsView/CraftsView.vue'
import HomeView from '../views/HomeView.vue'
import HardwareProjectsView from '../views/HardwareProjectsView/HardwareProjectsView.vue'
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
