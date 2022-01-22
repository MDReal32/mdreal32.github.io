import { renderToString, SSRContext } from "vue/server-renderer";
import { app } from "./main";
import { ServerRenderFunction } from "./types/ServerRenderFunction";

export const render: ServerRenderFunction = async () => {
  const ctx: SSRContext = {};
  const html = await renderToString(app, ctx);

  return { html };
};
