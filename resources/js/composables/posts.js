import { ref } from "vue";
import { onMounted } from "vue";

export const usePosts = () => {
    const posts = ref({});

    const getPosts = async (page = 1, category = "") => {
        axios
            .get(`/api/posts?page=${page}&category=${category}`)
            .then((response) => (posts.value = response.data))
            .catch((error) => console.log(error));
    };

    onMounted(getPosts);

    return { posts, getPosts };
};
