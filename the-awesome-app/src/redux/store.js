import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {authReducer} from './authReducer';
import {cartReducer} from './cartReducer';
import thunk from 'redux-thunk';

//middleware(logging)

const loggingMiddleware = (store) => {

    return (next) => {
        return (action) => {
            //log before
            console.log("state before: ", store.getState());
            console.log("action: ", action);
            const result = next(action);
            //log after
            console.log("state after: ", store.getState());
            return result;
        }
    }
}




// export const store = createStore(
//                         authReducer, 
//                         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// export const store = createStore(
//     combineReducers({auth: authReducer, shop: cartReducer}), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export const store = createStore(
//     combineReducers({auth: authReducer, shop: cartReducer}), 
//     applyMiddleware(loggingMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers({auth: authReducer, shop: cartReducer}),  composeEnhancers(
    applyMiddleware(loggingMiddleware, thunk)
  ));