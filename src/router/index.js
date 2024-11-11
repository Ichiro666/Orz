// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ShopView from "@/views/ShopView.vue";
import CatalogView from "@/views/CatalogView.vue";

// Ganti 'process.env.BASE_URL' dengan string kosong atau '/'.
const router = createRouter({
  history: createWebHistory("/"), // Bisa diganti sesuai dengan path yang Anda inginkan
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    //{
    //path: "/shop",
    //name: "shop",
    //component: ShopView,
    //},
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;
