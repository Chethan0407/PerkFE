export const RELEASE_PLAN_ROUTES = {
  MAIN: 'release-plan-main'
};

export const releasePlanRoutes = [
  {
    path: '/release-plans',
    name: RELEASE_PLAN_ROUTES.MAIN,
    component: () => import('@/views/release-plans/ReleasePlanView.vue')
  }
]; 