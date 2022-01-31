import { createApp, preloaderApp } from "./main";
import { router } from "./router";

preloaderApp.mount(".preloader .preloader-container");

(async () => {
  const app = await createApp();
  await router.isReady();
  app.mount("#app");
})();
