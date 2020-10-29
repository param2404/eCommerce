import { apiGet } from "./../api/apiUtils";

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';

const getCategoriesData = () => (dispatch) => {
    const request = apiGet('getCategories', {});
    dispatch({ type: GET_CATEGORIES })
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: GET_CATEGORIES_SUCCESS,
            categories: data,
        })
    }).catch((err) => {
        dispatch({
            type: GET_CATEGORIES_ERROR,
            err: err.response.data.message
        })
    }).catch((e) => {
        console.log(e)
    });
};

export { getCategoriesData }