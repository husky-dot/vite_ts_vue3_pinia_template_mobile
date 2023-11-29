import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/privacy',
      component: () => import('@/views/privacy/index.vue'),
    },
    {
      path: '/terms',
      component: () => import('@/views/terms/index.vue'),
    },
  ],
})

export default router
