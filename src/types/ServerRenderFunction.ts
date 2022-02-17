import { SSRContext } from "vue/server-renderer";
import { Data } from "./Data";

export interface ServerRenderFunctionResponse {
  html: string;
  context: SSRContext;
}

export type ServerRenderFunction = (url: string, config: Data) => Promise<ServerRenderFunctionResponse>;

export interface ServerModule {
  render: ServerRenderFunction;
}
