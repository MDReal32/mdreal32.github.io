import { createApp as createPreloaderApp } from "vue";
import { createApp } from "./main";
import { router } from "./router";
import Preloader from "./components/Preloader.vue";
import { store } from "./store";

createPreloaderApp(Preloader).use(store).mount(".preloader .preloader-container");

(async () => {
  const app = await createApp();
  await router.isReady();
  app.mount("#app");
})();
