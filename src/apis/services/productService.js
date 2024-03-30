import httpRequest from '../../axios/custom-axios';

const getProducts = async (endPoint, params) => {
    return await httpRequest.get(endPoint, { params });
};

const getProductHighestPrice = async (endPoint, params) => {
    return await httpRequest.get(endPoint, { params });
};

export { getProducts, getProductHighestPrice };
