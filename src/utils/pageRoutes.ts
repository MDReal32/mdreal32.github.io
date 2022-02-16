import { PageRoutes } from "../types/PageRoutes";
import { store } from "../store";
import { Data } from "../types/Data";
import { computed } from "vue";

export const getPageRoutes = (config = computed(() => store.getters.config as Data).value): PageRoutes[] => {
  const skillNames = Object.keys(config.skills || []);

  return [
    { path: "/home", text: "Home" },
    { path: "/about", text: "About" },
    ...skillNames.map<PageRoutes>(skillName => ({ path: `/technology/${skillName}`, text: `${skillName} Skills` })),
    { path: "/cv", text: "CV" }
  ];
};
