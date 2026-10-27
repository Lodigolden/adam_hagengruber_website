import { createRouter, createWebHistory } from 'vue-router'

// Top Level View
import HomeView from '@/views/Home.vue'

// About Views
import AboutView from '@/views/AboutView/About.vue'
import ResumeView from '@/views/AboutView/ResumeView/Resume.vue'
import WebsiteView from '@/views/AboutView/WebsiteView/Website.vue'

// Craft Views
import CraftsView from '@/views/CraftsView/Crafts.vue'
import ArcadeMachineView from '@/views/CraftsView/ArcadeMachineView/ArcadeMachine.vue'

// Hardware Projects Views
import HardwareProjectsView from '@/views/HardwareProjectsView/HardwareProjects.vue'
import BusinessCardView from '@/views/HardwareProjectsView/BusinessCardView/BusinessCard.vue'
import STM32SoMView from '@/views/HardwareProjectsView/STM32SoMView/STM32SoM.vue'

// Tools View
import ToolsView from '@/views/ToolsView/Tools.vue'
import DevoView from '@/views/ToolsView/DevoView/Devo.vue'

// Software Projects Views
import SoftwareProjectsView from '@/views/SoftwareProjectsView/SoftwareProjects.vue'

////////////////////////////////////////////////////////////////////////////////////////////////////
const routes = [
  // Top Level Views
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  // About Views
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/about/resume',
    name: 'About - Resume',
    component: ResumeView
  },
  {
    path: '/about/website',
    name: 'About - Website',
    component: WebsiteView
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
  {
    path: '/hardware-projects/business-card',
    name: 'Hardware Projects - Business Card',
    component: BusinessCardView
  },

  // Tools Views
  {
    path: '/tools',
    name: 'Tools',
    component: ToolsView
  },
  {
    path: '/tools/devo',
    name: 'Tools - Devo',
    component: DevoView
  },

  // Software Projects
  {
    path: '/software-projects',
    name: 'Software Projects',
    component: SoftwareProjectsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
