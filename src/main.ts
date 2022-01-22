import App from "./App.vue";
import { createApp } from "vue";
import { store } from "./store/store";

export const app = createApp(App).use(store);
