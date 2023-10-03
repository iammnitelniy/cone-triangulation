import axios from "axios";

export const instance = axios.create({
    baseURL: "https://cone-triangulation-one.vercel.app/api/coneParams",

    headers: {
        'Content-Type': 'application/json'
    },

});
