import { createRouter, createWebHistory } from "vue-router";
import SidebarView from "../views/sidebar.vue";
import HomeView from "@/components/navbar/home.vue";
import ContactView from "@/components/navbar/contact.vue";
import AboutView from "@/components/navbar/about.vue";

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
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
