import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import UnderDevelopment from '@/components/UnderDevelopment.vue';
import PRDPage from '@/components/PRDPage.vue';
import { releasePlanRoutes } from './release-plans';
import { testCaseRoutes } from './test-cases';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/under-development',
    name: 'UnderDevelopment',
    component: UnderDevelopment,
  },
  {
    path: '/prd-page',
    name: 'PRDPage',
    component: PRDPage,
  },
  ...releasePlanRoutes,
  ...testCaseRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
