import { useHttp } from "../hooks/http.hook";

function useAdCategoriesService () {
    const { loading, request, error, clearError } = useHttp();

    const apiBase = 'http://localhost:3005/adCategories';

    

    async function getAdCategories() {
        return await request(`${apiBase}`);
    }

    return {
        getAdCategories
    }
}


export default useAdCategoriesService;