import httpRequest from '../../axios/custom-axios';

const login = async (endpoint, params) => {
    return await httpRequest.post(endpoint, params);
};

const getMe = async (endpoint) => {
    return await httpRequest.get(endpoint);
};

export { login, getMe };
