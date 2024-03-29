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
    async function (error) {
        const { status, data } = error.response;
        if (status === 401 || data.message === 'token expired!') {
            const refresh_token = JSON.parse(
                localStorage.getItem('refresh_token')
            );
            if (refresh_token) {
                const response = await getNewToken(refresh_token);
                const { new_token } = response.data;
                localStorage.setItem('token', JSON.stringify(new_token));
            }
        }
        return Promise.reject(error);
    }
);

const getNewToken = async (refresh_token) => {
    const result = await httpRequest.post('/users/refresh-token', {
        refresh_token,
    });
    return result;
};

export default httpRequest;
