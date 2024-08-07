import { createRouter, createWebHistory } from "vue-router";
import SidebarView from "../views/sidebar.vue";
import HomeView from "@/components/navbar/home.vue";
import ContactView from "@/components/navbar/contact.vue";
import SignUpView from "@/components/navbar/signup.vue";
import AboutView from "@/components/navbar/about.vue";

// side bar content
import WomanFashionView from "@/components/sidebar/WomanFashionSidebar.vue";
import MenFashionView from "@/components/sidebar/MenFashionSidebar.vue";

const routes = [
  {
    path: "/sidebar",
    name: "sidebar",
    component: SidebarView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/Woman-fashion",
    name: "WomanFashion",
    component: WomanFashionView,
  },
  {
    path: "/men-fashion",
    name: "MenFashion",
    component: MenFashionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
