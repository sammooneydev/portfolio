import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";

const routes = [{ path: "/", component: HomeView }];

const router = createRouter({
  history: createWebHistory("/portfolio/"),
  routes,
  scrollBehavior(to,from,savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0}
  }
});

export default router;
