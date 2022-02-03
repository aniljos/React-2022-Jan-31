import { useContext } from "react"
import { AppTheme } from "./AppTheme"


function ThemeSwitchButton(){

    const theme = useContext(AppTheme);
    function change(){

        if(theme.state.mode === "light"){
            theme.dispatch({type: "SET_DARK"})
        }
        else if(theme.state.mode === "dark"){
            theme.dispatch({type: "SET_LIGHT"})
        }
    }


    return (
        <button className="btn btn-warning" onClick={change}>Switch Theme</button>
    )
}

export default ThemeSwitchButton;