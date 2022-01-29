import { renderToString, SSRContext } from "vue/server-renderer";
import { createApp } from "./main";
import { router } from "./router";
import { ServerRenderFunction } from "./types/ServerRenderFunction";

export const render: ServerRenderFunction = async () => {
  const ctx: SSRContext = {};
  const html = await renderToString(app, ctx);

  return { html };
};
