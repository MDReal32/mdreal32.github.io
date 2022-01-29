import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isSSR } from "./config";
import { index, order } from "./pages";
import { sortElementsByNames } from "./utils/sortElementsByNames";

// @ts-ignore
const pages: Record<string, Function> = import.meta.glob("/src/pages/**/*.vue");

export const foundRoutes: RouteRecordRaw[] = Object.entries(pages).map(([name, Component]) => {
  const validName = name.replace(/^\/src\/pages\/(.+)\.vue$/i, "$1");
  const path = `/${validName}`.toLowerCase();
  return { path, name: validName, component: Component } as RouteRecordRaw;
});

export const routes = sortElementsByNames(order, foundRoutes, (routes, element) =>
  routes.find(route => route.path.endsWith(element.toLowerCase()))
);

let found;
export const router = createRouter({
  history: isSSR ? createMemoryHistory() : createWebHistory(),
  routes: [
    ...(({ ...found } = routes.find(route => route.path === `/${index}`))
      ? (((found.path = "/"), (found.name += "_Index")), [found])
      : []),
    ...routes
  ]
});
