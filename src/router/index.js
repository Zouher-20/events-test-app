import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/Default.vue";
import Dashboard from "../views/dashboard/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      redirect: { name: "dashboard" },
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "events",
          name: "events",
          component: import("../views/events/index.vue"),
        },
        {
          path: "events/:id",
          name: "event-details",
          props: true,
          component: import("../views/event-details/index.vue"),
          beforeEnter: (to, from, next) => {
            var events = localStorage.getItem("events") || [];
            var index = parseInt(to.params.id);
            if (events[index]) return next();
            return next({ name: "404" });
          },
        },
        {
          path: "tickets",
          name: "tickets",
          component: import("../views/tickets/index.vue"),
        },
        {
          path: "new-event",
          name: "new-event",
          component: import("../views/new-event/index.vue"),
        },
        {
          path: "edit-event/:id",
          name: "edit-event",
          props: true,
          component: import("../views/edit-event/index.vue"),
          beforeEnter: (to, from, next) => {
            var events = localStorage.getItem("events") || [];
            var index = parseInt(to.params.id);
            if (events[index]) return next();
            return next({ name: "404" });
          },
        },
      ],
    },
    {
      path: "/view-store",
      component: import("../layouts/StoreLayout.vue"),
      children: [
        {
          path: "",
          name: "view-store",
          component: import("../views/view-store/index.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: import("../views/404.vue"),
    },
  ],
});

export default router;
