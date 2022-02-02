import { createApp as _createApp, createSSRApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import Axios from "axios";
import { router } from "./router";
import { isSSR } from "./config";
import { Data } from "./types/Data";
import Preloader from "./components/Preloader.vue";

export const preloaderApp = _createApp(Preloader).use(store);

export const createApp = async () => {
  const { data: config } = await Axios.get<Data>(
    "https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json"
  );
  await store.dispatch("setConfig", config);

  return (isSSR ? createSSRApp : _createApp)(App).use(router).use(store);
};
