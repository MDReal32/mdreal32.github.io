import { createStore } from "vuex";
import { State } from "../types/State";
import { Data } from "../types/Data";
import { Lang } from "../types/Lang";

export const store = createStore<State>({
  state: { config: {}, isPageReady: false, lang: "az" },
  getters: {
    config({ config }) {
      return config;
    },
    isPageReady({ isPageReady }) {
      return isPageReady;
    },
    getLang({ lang }) {
      return lang;
    }
  },
  mutations: {
    setConfig(state, config: Data) {
      state.config = config;
    },
    pageReady(state) {
      state.isPageReady = true;
    },
    setLang(state, lang: Lang) {
      state.lang = lang;
    }
  },
  actions: {
    setConfig({ commit }, config: Data) {
      commit("setConfig", config);
    },
    pageReady({ commit }) {
      commit("pageReady");
    },
    setLang({ commit }, lang: Lang) {
      commit("setLang", lang);
    }
  }
});
