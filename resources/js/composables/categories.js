import { ref } from "vue";
import { onMounted } from "vue";

export const useCategories= () => {
    const categories = ref({});

    const getCategories = async () => {
        axios
            .get(`/api/categories`)
            .then((response) => (categories.value = response.data.data))
            .catch((error) => console.log(error));
    };

    onMounted(getCategories);

    return { categories, getCategories };
};
