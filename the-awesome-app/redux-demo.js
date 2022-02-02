// ES6
//import {createStore} from 'redux';

//Nodejs module system
const redux = require('redux');
const createStore = redux.createStore;

//initial data
const initData = {
    message: "Hello",
    count: 5
}

//create reducer
const reducer = (currentState=initData, action) => {




    if(action.type === "INC_CTR"){

        // const copy = {...currentState};
        // copy.count = currentState.count + 1;
        // return copy;
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type === "DECR_CTR"){

        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
    if(action.type === "UPD_CTR"){

        return {
            ...currentState,
            count: action.value
        }
    }

    //return the updated state
    return currentState;
}

//create store
const store = createStore(reducer);
console.log("state:", store.getState());

//subscribe

store.subscribe(() => {
    console.log("subscribe", store.getState());
})

//dispatch action
store.dispatch({type: "INC_CTR"});
//console.log("state:", store.getState());

store.dispatch({type: "DECR_CTR"});
//console.log("state:", store.getState());

store.dispatch({type: "UPD_CTR", value: 20});
//console.log("state:", store.getState());
