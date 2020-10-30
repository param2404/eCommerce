import { apiGet,apiPost } from "./../api/apiUtils";


export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const GET_PRODUCTS_BY_SUBCATEGORY = 'GET_PRODUCTS_BY_SUBCATEGORY';
export const GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS = 'GET_PRODUCTS_SUCCESS_BY_SUBCATEGORY';
export const GET_PRODUCTS_BY_SUBCATEGORY_ERROR = 'GET_PRODUCTS_ERROR_BY_SUBCATEGORY';

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
    }).catch((e) => {
        console.log(e)
    });
};


const getProductsBySubCategory = (subCategoryId) => (dispatch) => {
    const request = apiPost('getProductsBySubCategory', subCategoryId);
    dispatch({ type: GET_PRODUCTS_BY_SUBCATEGORY })
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS,
            products: data,
        })
    }).catch((err) => {
        dispatch({
            type: GET_PRODUCTS_BY_SUBCATEGORY_ERROR,
            err: err.response.data.message
        })
    }).catch((e) => {
        console.log(e)
    });
};

export { getProductsData, getProductsBySubCategory}