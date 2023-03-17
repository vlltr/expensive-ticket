import "./bootstrap";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { TailwindPagination } from "laravel-vue-pagination";
import {router} from './routes'
import App from "./layouts/App.vue";

const app = createApp(App);
app.use(router);
app.component("Pagination", TailwindPagination);
app.mount("#app");
