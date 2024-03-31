import httpRequest from '../../axios/custom-axios';

const getProducts = async (endPoint, params) => {
    return await httpRequest.get(endPoint, { params });
};

const getProductById = async (endPoint) => {
    return await httpRequest.get(endPoint);
};

const getProductHighestPrice = async (endPoint, params) => {
    return await httpRequest.get(endPoint, { params });
};

export { getProducts, getProductHighestPrice, getProductById };
