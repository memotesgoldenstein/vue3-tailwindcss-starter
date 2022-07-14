import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import "./index.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.mount("#app");
