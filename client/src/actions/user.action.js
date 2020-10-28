import { apiPost, apiGet } from "./../api/apiUtils";


export const USER_DATA = 'USER_DATA';


const login = (data) => (dispatch) => {
    const request = apiPost('login', data );
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: USER_DATA,
            user: data,
        })
    });
};

const register = (data) => (dispatch) => {
    const request = apiPost('register', data);
    request.then((response) => {
        const { data } = response.data;
        dispatch({
            type: USER_DATA,
            user: data,
        })
    });
};

export { login,register }