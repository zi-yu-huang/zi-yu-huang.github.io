import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import components from '../views/components.vue'
import Resume from '../views/resume.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: index
    }, {
      path: '/componentStyle',
      component: components
    },{
      path: '/resume',
      component: Resume
    }
  ]
})
export default router