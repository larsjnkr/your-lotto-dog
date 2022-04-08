import { createRouter, createWebHistory } from "vue-router";

// views
import WelcomeView from "@/views/WelcomeView.vue";

export const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
