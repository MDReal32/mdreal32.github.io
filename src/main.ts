import { createApp as _createApp, createSSRApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import Axios from "axios";
import { router } from "./router";
import { isSSR } from "./config";
import { Progress } from "./types/Progress";

export const app = createApp(App).use(store);
