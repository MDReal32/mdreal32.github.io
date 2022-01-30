import { createStore } from "vuex";
import { State } from "../types/State";
import { Config } from "../types/Config";

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
    setConfig(state, config: Config) {
      state.config = config;
    },
    pageReady(state) {
      state.isPageReady = true;
    }
  },
  actions: {
    setConfig({ commit }, config: Config) {
      commit("setConfig", config);
    },
    pageReady({ commit }) {
      commit("pageReady");
    }
  }
});
