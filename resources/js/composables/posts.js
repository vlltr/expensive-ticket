import { ref } from "vue";
import { onMounted } from 'vue'

export const usePosts = () => {
    const posts = ref([]);

    const getPosts = async() => {
        axios.get('/api/posts/')
        .then(response => posts.value = response.data.data)
        .catch(error => console.log(error))
    }

    onMounted(getPosts)
    
    return {posts}
};
