
const initData = {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: ""
}

export const authReducer = (currentState=initData, action) => {

    if(action.type === "SET_AUTH"){
        return {
            ...action.payload
        }
    }

    return currentState;
}