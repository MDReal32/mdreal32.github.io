import { SSRContext } from "vue/server-renderer";

export interface ServerRenderFunctionResponse {
  html: string;
  context: SSRContext;
}

export type ServerRenderFunction = () => Promise<ServerRenderFunctionResponse>;

export interface ServerModule {
  render: ServerRenderFunction;
}
