import { apiPost } from './../api/apiUtils'


export const ORDER = 'ORDER';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';

const makeOrder = (data) => (dispatch) => {
    const request = apiPost('makeOrder', data);
    dispatch({ type: ORDER })
    request.then((response) => {
        dispatch({
            type: ORDER_SUCCESS,
        })
    }).catch((err) => {
        dispatch({
            type: ORDER_ERROR,
            err: err.response.data.message
        })
    }).catch((e) => {
        console.log(e)
    });
};


export { makeOrder }