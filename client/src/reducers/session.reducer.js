import {
    SET_SESSION, CLEAR_SESSION,
} from './../actions/user.actions'

const INITIAL_STATE = {
   sessionToken:null
};

const session = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SESSION:
            return {
                ...state,
                sessionToken:action.token
            }
        case CLEAR_SESSION:
            return {
                ...state,
                sessionToken:null
            }
        default:
            return state;
    }
};

export default session;
