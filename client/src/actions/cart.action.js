export const ADD_TO_CART = 'ADD_TO_CART';

const addToCart = (data) => (dispatch) => {
    dispatch({ type: ADD_TO_CART ,data:data})  
};

export { addToCart }