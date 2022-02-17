import { createApp, preloaderApp } from "./main";
import { router } from "./router";
import { store } from "./store";
import Axios from "axios";
import { Data } from "./types/Data";

preloaderApp.mount(".preloader .preloader-container");

(async () => {
  const app = createApp();
  await router.isReady();
  const jsonData = JSON.parse(document.getElementById("data")!.textContent!);
  await store.dispatch("setConfig", jsonData);

  Axios.get<Data>("https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json").then(({ data: config }) =>
    store.dispatch("setConfig", config)
  );

  app.mount("#app");
})();
