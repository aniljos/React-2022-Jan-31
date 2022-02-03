

const initData = {

    cart: []
}

export const cartReducer = (currentState=initData, action)=> {

    if(action.type === "ADD_TO_CART"){

        const updatedCart = [...currentState.cart];
        console.log("cart payload: ", action.payload);
        updatedCart.push(action.payload);

        return {
            ...currentState,
            cart: updatedCart
        }

    }
    if(action.type === "RMV_FROM_CART"){

        const updatedCart = [...currentState.cart];
        const index = updatedCart.findIndex(item => item.product.id === action.payload.product.id);
        if(index !== -1){
            updatedCart.splice(index, 1);
            return {
                ...currentState,
                cart: updatedCart
            }
        }
    }

    return currentState;
}