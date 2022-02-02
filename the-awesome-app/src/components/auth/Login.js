import { useState } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    async function login() {

        try {

            const url = "http://localhost:9000/login";
            const resp = await axios.post(url, { name: userName, password});
            setMessage("");
            dispatch({
                type: "SET_AUTH", payload: {
                    isAuthenticated: true,
                    accessToken: resp.data.accessToken,
                    refreshToken: resp.data.refreshToken
                }
            });

        } catch (error) {

            setMessage("Invalid Credentials");
            dispatch({
                type: "SET_AUTH", payload: {
                    isAuthenticated: false,
                    accessToken: "",
                    refreshToken: ""
                }
            });
        }
    }

    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-danger">{message}</div> : null}

            <div className="form-group">
                <label>UserName</label>
                <input className="form-control" placeholder="UserName"
                    value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="******" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br />
            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;