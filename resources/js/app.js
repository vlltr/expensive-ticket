import "./bootstrap";

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { TailwindPagination } from 'laravel-vue-pagination';
import PostsIndex from "./components/Posts/Index.vue";

const app = createApp({})

app.component('posts-index', PostsIndex)
app.component('Pagination', TailwindPagination)
app.mount('#app')