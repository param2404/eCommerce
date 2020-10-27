import { apiPost, apiGet } from "./../api/apiUtils";


export const PRODUCTS_DATA = 'PRODUCTS_DATA';
export const PRODUCTS = 'PRODUCTS';

const getProductsData = () => (dispatch) => {
    const request = apiGet('getProducts', {});
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: PRODUCTS_DATA,
            products: data,
        })
    });
};

export { getProductsData }