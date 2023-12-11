import { createRouter, createWebHistory } from "vue-router";
import SidebarView from "../views/sidebar.vue";
import HomeView from "@/components/navbar/home.vue";
import ContactView from "@/components/navbar/contact.vue";

const routes = [
  {
    path: "/sidebar",
    name: "sidebar",
    component: SidebarView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
