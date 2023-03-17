import "./bootstrap";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from "vue-router";
import { TailwindPagination } from "laravel-vue-pagination";
import PostsIndex from "./components/Posts/Index.vue";

const app = createApp({});

const routes = [{ path: "/", component: PostsIndex }];

const router = createRouter({
    history: createWebHistory(),
    routes
})
app.use(router)
app.component("Pagination", TailwindPagination);
app.mount("#app");
