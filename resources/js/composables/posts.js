import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
export const usePosts = () => {
    const posts = ref({});
    const router = useRouter();

    const getPosts = async (
        page = 1,
        category = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axios
            .get(
                `/api/posts?page=${page}&category=${category}&order_column=${order_column}&order_direction=${order_direction}`
            )
            .then((response) => (posts.value = response.data))
            .catch((error) => console.log(error));
    };

    onMounted(getPosts);

    const storePost = async (post) => {
        axios.post("/api/posts", post).then((response) => {
            router.push({ name: "posts.index" });
            posts.value = response.data;
        });
    };

    return { posts, getPosts, storePost };
};
