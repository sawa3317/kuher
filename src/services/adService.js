import { useHttp } from "../hooks/http.hook";

function useAdService () {
    const { loading, request, error, clearError } = useHttp();

    const apiBase = 'http://localhost:3005/ads';

    const postAd = async (ad) => {
        const json = JSON.stringify(ad);
        await request(apiBase, 'POST', json)
    }

    const getAd = async (category) => {
        return await request(`${apiBase}?category=${category}`)
    }

    

    return {
        postAd,
        getAd
    }
}


export default useAdService;