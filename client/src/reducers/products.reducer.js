import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from './../actions/products.actions'

const INITIAL_STATE = {
    productLoading: false,
    allproducts: [],
    getProductsError: null
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productLoading: true,
                allproducts: [],
                getProductsError: null
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productLoading: false,
                allproducts: action.products,
                getProductsError: null
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                allproducts: [],
                productLoading: false,
                getProductsError: action.err
            }
        default:
            return state;
    }
};

export default ProductsReducer;
