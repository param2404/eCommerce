import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS
} from '../actions/user.actions'

const INITIAL_STATE = {
    user: {},
    isLogging: false,
    isRegistering: false,
    loginError: null,
    registerError:null
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: {},
                isLogging: true,
                loginError: null
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLogging: false,
                loginError:null
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                user: {},
                isLogging: false,
                loginError:action.err
            }
        case REGISTER_USER:
            return {
                ...state,
                user: {},
                isRegistering: true,
                registerError: null
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isRegistering: false,
                registerError: null
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                user: {},
                isRegistering: false,
                registerError: action.err
            }
        default:
            return state;
    }
};

export default UserReducer;
