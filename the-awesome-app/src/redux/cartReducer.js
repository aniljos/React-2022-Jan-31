

const initData = {

    cart: []
}

export const cartReducer = (currentState=initData, action)=> {

    if(action.type === "ADD_TO_CART"){

        const updatedCart = [...currentState.cart];
        updatedCart.push(action.payload);

        return {
            ...currentState,
            cart: updatedCart
        }

    }

    return currentState;
}