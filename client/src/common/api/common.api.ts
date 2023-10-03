import axios from "axios";

export const instance = axios.create({
    baseURL: "/api/coneParams",

    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true

});
