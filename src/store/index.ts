import { createStore } from "vuex";
import { State } from "../types/State";
import { Data } from "../types/Data";

export const store = createStore<State>({
  state: { config: {}, isPageReady: false },
  getters: {
    config({ config }) {
      return config;
    },
    isPageReady({ isPageReady }) {
      return isPageReady;
    }
  },
  mutations: {
    setConfig(state, config: Data) {
      state.config = config;
    },
    pageReady(state) {
      state.isPageReady = true;
    }
  },
  actions: {
    setConfig({ commit }, config: Data) {
      commit("setConfig", config);
    },
    pageReady({ commit }) {
      commit("pageReady");
    }
  }
});
