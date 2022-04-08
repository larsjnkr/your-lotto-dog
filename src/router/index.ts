import { createRouter, createWebHistory } from "vue-router";

// views
import WelcomeView from "@/views/WelcomeView.vue";
import EurojackpotView from "@/views/EurojackpotView.vue";

export const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
  {
    path: "/eurojackpot",
    name: "eurojackpot",
    component: EurojackpotView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
