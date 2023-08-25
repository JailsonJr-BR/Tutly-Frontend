import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-page.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register-page.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router
