import {createStore, combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {cartReducer} from './cartReducer';



// export const store = createStore(
//                         authReducer, 
//                         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(
    combineReducers({auth: authReducer, shop: cartReducer}), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());