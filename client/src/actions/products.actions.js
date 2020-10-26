import { apiPost, apiGet } from "./../api/apiUtils";


export const PRODUCTS_DATA = 'PRODUCTS_DATA';
export const PRODUCTS = 'PRODUCTS';

const getProductsData = () => (dispatch) => {
    const request = apiGet('getProducts', {});
    console.log(request)
    request.then((response) => {
        const { data } = response;
        dispatch({
            type: PRODUCTS_DATA,
            products: data,
        })
    });
};

export { getProductsData }