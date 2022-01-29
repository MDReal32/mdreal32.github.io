import { createApp } from "./main";
import { router } from "./router";

(async () => {
  const app = await createApp();
  await router.isReady();
  app.mount("#app");
})();
