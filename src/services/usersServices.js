import { useHttp } from "../hooks/http.hook";


function useUsersServices () {
    const { loading, request, error, clearError } = useHttp();

    const apiBase = 'http://localhost:3005/users';

    const postUser = async (data) => {
        const json = JSON.stringify(data);
        await request(apiBase, 'POST', json)
    }

    const findUser = async (email, password) => {
        const res = await request(`${apiBase}?email=${email}&password=${password}`);
        return await res[0];
    }

    return {
        loading,
        error,
        clearError,
        postUser,
        findUser

    }
}


export default useUsersServices;