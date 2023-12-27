import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Namoz",
      name: "namoz",
      component: () => import("../components/Namoz/Namoz.vue"),
    },
    {
      path: "/Hadis",
      name: "hadis",
      component: () => import("../components/Hadis/Hadis.vue"),
    },
  ],
});

export default router;
