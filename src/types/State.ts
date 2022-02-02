import { Data } from "./Data";

export interface State {
  config: Partial<Data>;
  isPageReady: boolean;
}
