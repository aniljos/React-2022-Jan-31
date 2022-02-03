import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import Input from "../widgets/Input";
import Logout from "./Logout";
import { createSetAuthAction } from '../../redux/actionCreator';

function Login(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    //  const params = useParams();
    const location = useLocation();
    const userNameRef = useRef(null);


    useEffect(() => {

        if (userNameRef.current) {
            //console.log(userNameRef.current.inputRef);
            //userNameRef.current.inputRef.current.focus();
            userNameRef.current.focus();
        }

    }, [])

    async function login() {

        try {

            const url = "http://localhost:9000/login";
            const resp = await axios.post(url, { name: userName, password });
            setMessage("");
            // dispatch({
            //     type: "SET_AUTH", payload: {
            //         isAuthenticated: true,
            //         accessToken: resp.data.accessToken,
            //         refreshToken: resp.data.refreshToken
            //     }
            // });

            dispatch(createSetAuthAction({
                isAuthenticated: true,
                accessToken: resp.data.accessToken,
                refreshToken: resp.data.refreshToken
            }));

            //debugger;
            const searchParams = location.search;
            const redirectUrl = searchParams ? searchParams.split("=")[1] : "/gadgets";
            history.push(redirectUrl);

        } catch (error) {

            setMessage("Invalid Credentials");
            // dispatch({
            //     type: "SET_AUTH", payload: {
            //         isAuthenticated: false,
            //         accessToken: "",
            //         refreshToken: ""
            //     }
            // });
            dispatch(createSetAuthAction({
                isAuthenticated: false,
                accessToken: "",
                refreshToken: ""
            }));
        }
    }

    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-danger">{message}</div> : null}

            <Input ref={userNameRef} label="User Name" placeholder="UserName"
                value={userName} onChange={(e) => setUserName(e.target.value)} />

            <Input label="Password" placeholder="******" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} />

            {/* <div className="form-group">
                <label>UserName</label>
                <input className="form-control" placeholder="UserName"
                    value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="******" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div> */}




            <br />
            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
            {/* <Logout/> */}
        </div>
    )
}

export default Login;