import "./bootstrap";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from "vue-router";
import { TailwindPagination } from "laravel-vue-pagination";

import App from "./layouts/App.vue";
import PostsIndex from "./components/Posts/Index.vue";
import PostCreate from "./components/Posts/Create.vue";

const routes = [
    { path: "/", component: PostsIndex },
    {
        path: "/posts/create",
        component: PostCreate,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App);
app.use(router);
app.component("Pagination", TailwindPagination);
app.mount("#app");
