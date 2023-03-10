import { ref } from "vue";
import { onMounted } from "vue";

export const usePosts = () => {
    const posts = ref({});

    const getPosts = async (page = 1) => {
        axios
            .get(`/api/posts?page=${page}`)
            .then((response) => (posts.value = response.data))
            .catch((error) => console.log(error));
    };

    onMounted(getPosts);

    return { posts, getPosts };
};
