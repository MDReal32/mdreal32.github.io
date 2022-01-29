import { createApp as _createApp, createSSRApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import Axios from "axios";
import { router } from "./router";
import { isSSR } from "./config";
import { Config } from "./types/Config";

export const createApp = async () => {
  const config = await Axios.get<Progress>("https://raw.githubusercontent.com/MDReal32/MDReal32/master/config.json");
  await store.dispatch("setConfig", config.data);
  await store.dispatch("setConfig", {
    General: [
      { text: "JavaScript", percentage: 60, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 30, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 25, color: "#E5CF1C" }
    ],
    Frontend: [
      { text: "JavaScript", percentage: 60, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 25, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" }
    ],
    Backend: [
      { text: "JavaScript", percentage: 60, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 30, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 25, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 30, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 70, color: "#E5CF1C" },
      { text: "JavaScript", percentage: 20, color: "#E5CF1C" }
    ]
  });

  return (isSSR ? createSSRApp : _createApp)(App).use(router).use(store);
};
