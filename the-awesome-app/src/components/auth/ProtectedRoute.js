
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux';

// <ProtectedRoute path="/gadgets" component={GadgetStore}/>
function ProtectedRoute(props){

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if(isAuthenticated){
        return (
            <Route {...props}/>
        )
    }
    else{
        return (
            <Route {...props}>
                <Redirect to={`/login?redirectUrl=${props.path}`}/>
            </Route>
        )
    }
    
}
export default ProtectedRoute;