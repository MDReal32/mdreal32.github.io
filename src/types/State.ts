import { Data } from "./Data";
import { Lang } from "./Lang";

export interface State {
  config: Partial<Data>;
  isPageReady: boolean;
  lang: Lang;
}
