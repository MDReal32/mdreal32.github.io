import { createStore } from "vuex";
import { PageType, State } from "../types/State";

type A = Parameters<typeof createStore>[0];

export const store = createStore<State>({
  state: {
    page: 0,
    pages: [
      { name: "Home", type: "main" },
      { name: "About", type: "about" }
    ]
  },
  getters: {
    currentPage(state) {
      return state.pages[state.page];
    },
    allPages(state) {
      return state.pages;
    }
  },
  mutations: {
    setPage(state, page: PageType) {
      state.page = state.pages.findIndex(el => el.type === page);
    }
  },
  actions: {
    setPage({ commit }, page: State["page"]) {
      commit("setPage", page);
    }
  }
});
