import { apiPost } from "../api/apiUtils";

export const LOGIN_USER='LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'

export const SET_SESSION='SET_SESSION'


const login = (data) => (dispatch) => {
    const request = apiPost('login', data);   
    dispatch({type:LOGIN_USER})
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: LOGIN_USER_SUCCESS,
            user: data,
        })
        dispatch({
            type: SET_SESSION,
            token:data.token
        })
    }).catch((err)=>{
        dispatch({
            type: LOGIN_USER_ERROR,
            err:err.response.data.message
        })
    });
};

const register = (data) => (dispatch) => {
    const request = apiPost('register', data);
    dispatch({ type: REGISTER_USER })
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: REGISTER_USER_SUCCESS,
            user: data,
        })
        dispatch({
            type: SET_SESSION,
            token: data.token
        })
    }).catch((err) => {
        dispatch({
            type: REGISTER_USER_ERROR,
            err: err.response.data.message
        })
    });
};

export { login,register }