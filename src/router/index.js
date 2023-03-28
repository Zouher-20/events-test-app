import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/add-todo",
    //   name: "add-todo",
    //   component: () => import("../views/AddTodo.vue"),
    // },
  ],
});

export default router;
