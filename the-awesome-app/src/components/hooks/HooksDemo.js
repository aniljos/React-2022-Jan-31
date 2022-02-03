import React, { useState, useCallback, useRef, useImperativeHandle } from "react";
import simpleHOC from "../hoc/simpleHOC";

// const Test = (props) => {
//     return (
//         <div></div>
//     )
// }

{/* <Test ref={}/> */}
const Test = React.forwardRef((props, ref) => {
    return (
        <div></div>
    )
});


// React.memo() ==> 16.3, Component will re-rendered only if the props/state changes
const Simple = React.memo(React.forwardRef((props, ref) => {

    const [x, setX] = useState(10);
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => {

        // the object that is returned is assigned to the ref
        return {
            foo: foo,
            bar : () => {alert("bar")},
            getState:  () => {return x;},
            x: x,
            setFocus: () => {
                inputRef.current.focus();
            }
        }
    });

    function foo(){
        alert("in simple foo");
    }
    console.log("in simple");
    return (
        <div className="alert alert-danger">
            <p>This is a simple component</p>
            <p>Data: {props.data}</p>
            <p>
                <button className="btn btn-danger" onClick={() => props.onDataUpdate(2)}>Update</button>
            </p>
            <p>
                <input ref={inputRef}  className="form-control"/>
            </p>
        </div>
    )
}));



function HooksDemo(){

    const [count, setCount] = useState(5);
    const [message, setMessage] = useState("Hello");
    const simpleRef = useRef(null);
    
    const updateCount = useCallback((value) => {
        setCount(count + value);
    }, [count]);

    function invokeSimple(){

        console.log("x", simpleRef.current.x);
        console.log("getState", simpleRef.current.getState());
        //simpleRef.current.foo();
        simpleRef.current.setFocus();
    }

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

            

            <Simple ref={simpleRef} data={count} onDataUpdate={updateCount}/>

            <div>
                <button className="btn btn-success" 
                            onClick={invokeSimple}>Invoke Foo</button>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )

}

export default simpleHOC(HooksDemo);