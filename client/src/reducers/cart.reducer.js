import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    HANDLE_QUANTITY_CART
   } from './../actions/cart.action'

const INITIAL_STATE = {
  mycart:[]
};


const CartReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                mycart: [...state.mycart,action.data],
            }
         case REMOVE_FROM_CART:
             return {
                 ...state,
                 mycart: state.mycart.filter(c=>c.productId !== action.data),
             }
         case HANDLE_QUANTITY_CART:
             return {
                 ...state,
                 mycart: action.data,
             }
        default:
            return state;
    }
};

export default CartReducer;
