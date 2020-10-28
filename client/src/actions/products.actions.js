import { apiGet } from "./../api/apiUtils";


export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

const getProductsData = () => (dispatch) => {
    const request = apiGet('getProducts', {});
    dispatch({type:GET_PRODUCTS})
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            products: data,
        })
    }).catch((err) => {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            err: err.response.data.message
        })
    });
};

export { getProductsData }