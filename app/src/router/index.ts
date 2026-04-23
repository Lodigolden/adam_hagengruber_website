import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HardwareProjectsView from '../views/HardwareProjectsView/HardwareProjectsView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
