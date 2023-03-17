<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <div class="w-1/5">
          <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Filter By Category</label>
          <select id="category" name="category" v-model="selectedCategory"
            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option value="">All</option>
            <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button"
          class="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
          user</button>
      </div>
    </div>
    <div class="-mx-4 mt-8 sm:-mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Id</th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Title
            </th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Content
            </th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
              Category
            </th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Created
              At</th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="post in posts.data" :key="post.id">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ post.id }}</td>
            <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ post.title }}</td>
            <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ post.content }}</td>
            <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ post.category_name }}
            </td>
            <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ post.created_at }}</td>
            <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, {{ post.title
              }}</span></a>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination :data="posts" @pagination-change-page="page => getPosts(page, selectedCategory)" />
    </div>
  </div>
</template>
  
<script setup>
import { ref, watch } from 'vue';
import { usePosts, useCategories } from '../../composables'

const { posts, getPosts } = usePosts()
const { categories } = useCategories()

const selectedCategory = ref('')
watch(selectedCategory, (current, previous) => {
  getPosts(1, current)
})

</script>