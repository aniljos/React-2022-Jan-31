import { Component, PureComponent } from "react";
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import * as actionCreators from '../../redux/actionCreator';

class Logout extends PureComponent{

    constructor(props){
        super(props);
        console.log("Logout props", props);

        this.props.setAuth({
            isAuthenticated: false,
            accessToken: "",
            refreshToken: ""
        });
        this.props.clearCart();
    }

    render(){
        return (

            <Redirect to="/login"/>
            // <div>
            //     <h3>Logout</h3>
            //     <p>accessToken: {this.props.auth.accessToken}</p>
            //     <p>refreshToken: {this.props.auth.refreshToken}</p>
            // </div>
            
        )
    }

}

//Maps the redux State to component Props
const mapStateToProps = (reduxState)=>{

    return {
        auth : reduxState.auth,
        //cart: reduxState.shop.cart
    }
}

//Maps the redux dispatch to component Props
const mapDispatchToProps = (dispatch) => {
    return {
        // setAuth: (data) => {dispatch({type: "SET_AUTH", payload: data})},
        // clearCart: () => {dispatch({type: "CLEAR_CART"})},

        setAuth: (data) => {dispatch(actionCreators.createSetAuthAction(data))},
        clearCart: () => {dispatch(actionCreators.createClearCartAction())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
//export default Logout;