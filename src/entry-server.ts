import { renderToString, SSRContext } from "vue/server-renderer";
import { createApp } from "./main";
import { router } from "./router";
import { ServerRenderFunction } from "./types/ServerRenderFunction";
import { Data } from "./types/Data";
import { store } from "./store";

export const render: ServerRenderFunction = async (url: string, config: Data) => {
  await store.dispatch("setConfig", config);
  await router.push(url);
  await router.isReady();
  const app = createApp();

  const context: SSRContext = {};
  const html = await renderToString(app, context);

  return { html, context };
};
