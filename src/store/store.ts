import { createStore } from "vuex";
import { State } from "../types/State";
import { pages, PageType } from "../pages";

export const store = createStore<State>({
  state: { page: "main", pages },
  getters: {
    currentPage(state) {
      return state.pages[state.page];
    }
  },
  mutations: {
    setPage(state, page: PageType) {
      state.page = page;
    }
  },
  actions: {
    setPage({ commit }, page: State["page"]) {
      commit("setPage", page);
    }
  }
});
