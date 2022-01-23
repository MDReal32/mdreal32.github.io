import { DefineComponent } from "vue";
import { PageType } from "../pages";

export interface Page {
  name: string;
  type: PageType;
  component: DefineComponent<any, any, any, any, any, any, any, any, any, any, any, any>;
}

export interface State {
  page: PageType;
  pages: Record<PageType, Page>;
}
