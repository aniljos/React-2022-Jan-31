import axios from 'axios';
import {store} from '../redux/store';

axios.interceptors.request.use((config) => {

    
    const state = store.getState();
    config.headers.Authorization = `Bearer ${state.auth.accessToken}`;
    return config;

})

//interceptor -- response
// status code is 401 or 403
    // send a new request (/refreshToken) ===> set state to notify the app is refershing
    // we get a new access token--> store to redux
    // we need to retry the original request with the new access token 
    //if a sucess is received then return to the caller
    // else send 401 to caller
