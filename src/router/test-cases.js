export const TEST_CASE_ROUTES = {
  SELECTION: 'test-case-selection',
  WEB: 'web-test-cases',
  MOBILE: 'mobile-test-cases'
};

export const testCaseRoutes = [
  {
    path: '/test-cases',
    name: 'test-case-view',
    component: () => import('@/views/test-cases/TestCaseView.vue')
  }
]; 