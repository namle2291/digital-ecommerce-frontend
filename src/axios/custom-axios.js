import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

httpRequest.interceptors.request.use(
    function (config) {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

httpRequest.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default httpRequest;
