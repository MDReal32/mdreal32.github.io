import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isSSR } from "./config";
import { CV, About, Home, Technology } from "./pages";

export const routes: RouteRecordRaw[] = [
  { name: "Index", path: "/", component: async () => CV },
  { name: "Home", path: "/home", component: async () => Home },
  { name: "About", path: "/about", component: async () => About },
  { name: "Technology", path: "/technology/:techid", component: async () => Technology },
  { name: "CV", path: "/cv", component: async () => CV }
];

export const router = createRouter({ history: isSSR ? createMemoryHistory() : createWebHistory(), routes });
