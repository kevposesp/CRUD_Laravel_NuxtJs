import axios from "axios";
import coreConfig from "../config"

export const httpClient = axios.create({
    baseURL: coreConfig.LARAVEL_URL
})

// if (localStorage.getItem("jwt")) {
//     httpClient.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem("jwt");
// }

const laravelApiService = {

    get(path) {
        return httpClient.get(path)
            .catch((error) => { throw new Error(error) })
    },
    post(path, body) {
        return httpClient.post(path, body)
            .catch((error) => { throw new Error(error) })
    },
    put(path, body) {
        return httpClient.put(path, body)
            .catch((error) => { throw new Error(error) })
    },
    delete(path) {
        return httpClient.delete(path)
            .catch((error) => { throw new Error(error) })
    }
}

export default laravelApiService