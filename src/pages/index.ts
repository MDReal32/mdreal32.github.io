import { Page } from "../types/State";
import Main from "./Main.vue";

export type PageType = "main" | "about" | "frontend" | "backend";

export const pages: Record<PageType, Page> = {
  main: { name: "Home", type: "main", component: Main },
  about: { name: "About", type: "about", component: Main },
  frontend: { name: "Frontend Skills", type: "frontend", component: Main },
  backend: { name: "Backend Skills", type: "backend", component: Main }
};
