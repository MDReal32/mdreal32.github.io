import { createApp as _createApp, createSSRApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";
import { isSSR } from "./config";
import Preloader from "./components/Preloader.vue";

export const preloaderApp = _createApp(Preloader).use(store);

export const createApp = () => {
  return (isSSR ? createSSRApp : _createApp)(App).use(router).use(store);
};
