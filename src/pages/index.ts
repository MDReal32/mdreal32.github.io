import { Page } from "../types/State";
import Main from "./Main.vue";
import About from "./About.vue";
import Frontend from "./Frontend.vue";
import Backend from "./Backend.vue";

export type PageType = "main" | "about" | "frontend" | "backend";

export const pages: Record<PageType, Page> = {
  main: { name: "Home", type: "main", component: Main },
  about: { name: "About", type: "about", component: About },
  frontend: { name: "Frontend Skills", type: "frontend", component: Frontend },
  backend: { name: "Backend Skills", type: "backend", component: Backend }
};
