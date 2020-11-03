export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const HANDLE_QUANTITY_CART = 'HANDLE_QUANTITY_CART';

const addToCart = (data) => (dispatch) => {
    dispatch({ type: ADD_TO_CART ,data:data})  
};

const removeFromCart = (data) => (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, data: data })
};

const handleCartProductQuantity = (data) => (dispatch) => {
    dispatch({ type: HANDLE_QUANTITY_CART, data: data })
};

export { addToCart, removeFromCart, handleCartProductQuantity }