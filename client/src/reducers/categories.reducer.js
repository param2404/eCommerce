import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR
} from './../actions/category.action'

const INITIAL_STATE = {
    categoriesLoading: false,
    allcategories: [],
    getCategoriesError: null
};

const CategoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesLoading: true,
                allcategories: [],
                getCategoriesError: null
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesLoading: false,
                allcategories: action.categories,
                getCategoriesError: null
            }
        case GET_CATEGORIES_ERROR:
            return {
                ...state,
                allcategories: [],
                categoriesLoading: false,
                getCategoriesError: action.err
            }
        default:
            return state;
    }
};

export default CategoriesReducer;
