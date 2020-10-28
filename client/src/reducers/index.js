/* eslint-disable */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import ProductsReducer from './products.reducer';
import UserReducer from './user.reducer';
import session from './session.reducer'
import { connectRouter } from 'connected-react-router';

export default (history) =>
    combineReducers({
        form,
        session,
        UserReducer,
        ProductsReducer,
        router: connectRouter(history),
    });
