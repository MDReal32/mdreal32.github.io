import { createStore } from "vuex";
import { State } from "../types/State";
import { Data } from "../types/Data";
import { Lang } from "../types/Lang";

export const store = createStore<State>({
  state: { config: {}, isPageReady: false, lang: "az", skillType: "" },
  getters: {
    config({ config }) {
      return config;
    },
    skillType({ skillType }) {
      return skillType;
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
      config?.skillTypes && (state.skillType = Object.keys(config.skillTypes)[0]);
    },
    pageReady(state) {
      state.isPageReady = true;
    },
    setLang(state, lang: Lang) {
      state.lang = lang;
    },
    setSkillType(state, skillType: string) {
      state.skillType = skillType;
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
    },
    setSkillType({ commit }, skillType: string) {
      commit("setSkillType", skillType);
    }
  }
});
