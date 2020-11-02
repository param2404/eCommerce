import {
    ADD_TO_CART,
   } from './../actions/cart.action'

const INITIAL_STATE = {
  mycart:{}
};


const CartReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                mycart: action.data.productId,
            }
        default:
            return state;
    }
};

export default CartReducer;
