import axios from 'axios';

export const createSetAuthAction = (payload)=> {
    return {
        type: "SET_AUTH", payload
    }
}

export const createClearCartAction = () => {
    return {
        type: "CLEAR_CART"
    }
}

export const createSetProductAction = () => {

    return async (dispatch) => {

        const url = process.env.REACT_APP_PRODUCTS_URL;
        try {
            
            const {data} = await axios.get(url);
            dispatch({
                type: "SET_PRODUCTS",
                payload: data
            });

        } catch (error) {
            console.log(error);
        }

    }

}