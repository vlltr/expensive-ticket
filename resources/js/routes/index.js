import { createRouter, createWebHistory } from "vue-router";

import PostsIndex from "../components/Posts/Index.vue";
import PostCreate from "../components/Posts/Create.vue";

const routes = [
    {
        path: "/",
        name: "posts.index",
        component: PostsIndex,
        meta: { title: "Posts" },
    },
    {
        path: "/posts/create",
        name: "posts.create",
        component: PostCreate,
        meta: { title: "Create Post" },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
