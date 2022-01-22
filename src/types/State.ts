export type PageType = "main" | "about";

export interface Page {
  name: string;
  type: PageType;
}

export interface State {
  page: number;
  pages: Page[];
}
