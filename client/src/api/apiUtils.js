import { apiConfig, apiKeys } from "./apiConfig";
import axios from "axios";

export const getUrlByKey = (key) => {
    return apiConfig + apiKeys[key];
};

export const apiGet = (key, args) => {
    if (typeof args === 'string') {
        return axios.get(getUrlByKey(key) + args);
    } else {
        return axios.get(getUrlByKey(key), {
            data: args,
            // withCredentials: true,
        });
    }

};

export const apiPost = (key, args) => {
    return axios.post(
        getUrlByKey(key),
        args,
    );
};

export const apiPut = (key, args) => {
    return axios.put(
        getUrlByKey(key),
        args,
    );
};

export const apiPostUrl = (key, dynamicUrl, args) => {
    return axios.post(
        getUrlByKey(key) + dynamicUrl,
        args,
    );
};

export const apiUploadFile = (key, args, config) => {
    return axios.post(
        getUrlByKey(key),
        args,
        config
    );
};

export const apiDelete = (key, args) => {
    return axios.delete(
        getUrlByKey(key),
        args,
    );
};

export const apiDeleteUrl = (key, dynamicUrl, args) => {
    return axios.delete(
        getUrlByKey(key) + dynamicUrl,
        args,
    );
};

const defaultOptions = {
    baseURL: apiConfig,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials':true
    },
}

// Create instance
let instance = axios.create(defaultOptions)

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['x-auth-token'] = token
    }
    return config
})
