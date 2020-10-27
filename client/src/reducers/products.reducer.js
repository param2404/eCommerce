
const INITIAL_STATE = {
 allproducts:[]
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PRODUCTS_DATA':
            return {
                ...state,
                allproducts:action.products
            }
        default:
        return state;
    }
};

export default ProductsReducer;
