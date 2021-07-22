import axios from "axios";

export const _axios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});
