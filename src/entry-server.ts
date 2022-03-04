import { renderToString, SSRContext } from "vue/server-renderer";
import { createApp } from "./main";
import { router } from "./router";
import { ServerRenderFunction } from "./types/ServerRenderFunction";
import { Data } from "./types/Data";
import { store } from "./store";

const dummyConfig: Data = {
  name: "",
  surname: "",
  phoneNumber: "",
  description: "",
  email: "",
  image: "",
  from: { city: "", country: "" },
  birthday: { day: -1, month: -1, year: -1 },
  skills: {},
  skillTypes: {},
  education: [],
  languages: [],
  socialLinks: [],
  job: [],
  groups: {},
  i18n: {}
};

export const render: ServerRenderFunction = async (url: string) => {
  await store.dispatch("setConfig", dummyConfig);
  await router.push(url);
  await router.isReady();
  const app = createApp();

  const context: SSRContext = {};
  const html = await renderToString(app, context);

  return { html, context };
};
