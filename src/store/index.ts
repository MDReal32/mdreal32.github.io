import { createStore } from "vuex";
import { State } from "../types/State";
import { Config } from "../types/Config";

export const store = createStore<State>({
  state: { config: {} },
  getters: {
    config({ config }) {
      return config;
    }
  },
  mutations: {
    setConfig(state, config: Config) {
      state.config = config;
    }
  },
  actions: {
    setConfig({ commit }, config: Config) {
      commit("setConfig", config);
    }
  }
});
