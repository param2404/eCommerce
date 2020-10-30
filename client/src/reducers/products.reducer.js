import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_BY_SUBCATEGORY,
    GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS,
    GET_PRODUCTS_BY_SUBCATEGORY_ERROR
} from './../actions/products.actions'

const INITIAL_STATE = {
    productLoading: false,
    allproducts: [],
    getProductsError: null,
    subproductLoading: false,
    products: [],
    getSubProductsError: null
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
        case GET_PRODUCTS_BY_SUBCATEGORY:
            return {
                ...state,
                subproductLoading: true,
                products: [],
                getSubProductsError: null
            }
        case GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                subproductLoading: false,
                products: action.products,
                getSubProductsError: null
            }
        case GET_PRODUCTS_BY_SUBCATEGORY_ERROR:
            return {
                ...state,
                products: [],
                subproductLoading: false,
                getSubProductsError: action.err
            }
        default:
            return state;
    }
};

export default ProductsReducer;
