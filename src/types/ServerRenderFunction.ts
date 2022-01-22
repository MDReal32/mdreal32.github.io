export interface ServerRenderFunctionResponse {
  html: string;
}

export type ServerRenderFunction = () => Promise<ServerRenderFunctionResponse>;

export interface ServerModule {
  render: ServerRenderFunction;
}
