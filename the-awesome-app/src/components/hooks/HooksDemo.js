import React, { useState, useCallback } from "react";

// React.memo() ==> 16.3, Component will re-rendered only if the props/state changes
const Simple = React.memo((props) => {

    console.log("in simple");
    return (
        <div className="alert alert-danger">
            <p>This is a simple component</p>
            <p>Data: {props.data}</p>
            <p>
                <button className="btn btn-danger" onClick={() => props.onDataUpdate(props.data + 2)}>Update</button>
            </p>
        </div>
    )
});



function HooksDemo(){

    const [count, setCount] = useState(5);
    const [message, setMessage] = useState("Hello");

    
    const updateCount = useCallback((value) => {
        
        setCount(value);

    }, []);

    return (
        <div>
            <h4>Hooks Demo</h4>

            <input className="form-control" type="text" value={message} 
                                        onChange={e => setMessage(e.target.value)}/>
            <div className="alert alert-warning">
                  Message: {message}  
            </div>

           

            <div>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div className="alert alert-primary">
                  Count: {count}  
            </div>

            <Simple data={count} onDataUpdate={updateCount}/>
        </div>
    )

}

export default HooksDemo;