import { useReducer } from "react";
import { AppTheme } from "./AppTheme";

const initTheme  = {
    mode: "light"
}

function reducer(currentState, action){

    if(action.type === "SET_DARK"){
        return {
            ...currentState,
            mode: "dark"
        }
    }
    
    if(action.type === "SET_LIGHT"){
        return {
            ...currentState,
            mode: "light"
        }
    }
    
}

function AppThemeProvider(props){

    const [state, dispatch] = useReducer(reducer, initTheme);

    return (
        // <AppTheme.Provider value={initTheme}>
        <AppTheme.Provider value={{state, dispatch}}>
            {props.children}
        </AppTheme.Provider>
    )
}

export default AppThemeProvider;