
const INITIAL_STATE = {
    user: {}
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_DATA':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default UserReducer;
