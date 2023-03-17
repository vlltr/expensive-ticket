<template>
    <form @submit.prevent="storePost(post)">
        <!-- Title -->
        <div>
            <label for="post-title" class="block font-medium text-sm text-gray-700">
                Title
            </label>
            <input v-model="post.title" id="post-title" type="text"
                class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>

        <!-- Content -->
        <div class="mt-4">
            <label for="post-content" class="block font-medium text-sm text-gray-700">
                Content
            </label>
            <textarea v-model="post.content"  id="post-content"
                class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
        </div>

        <!-- Category -->
        <div class="mt-4">
            <label for="post-category" class="block font-medium text-sm text-gray-700">
                Category
            </label>
            <select v-model="post.category_id" id="post-category"
                class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="" selected>-- Choose category --</option>
                <option v-for="category in categories" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
        </div>

        <!-- Buttons -->
        <div class="mt-4">
            <button
                class="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue';
import { useCategories, usePosts } from '../../composables'

const { categories } = useCategories()
const { storePost } = usePosts()
const post = reactive({
    title: '',
    content: '',
    category_id: ''
})


</script>