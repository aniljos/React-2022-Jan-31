

function Hello(props){
    //return the JSX
    return (
        <div>
            <h3>Message: {props.message}</h3>
            <h4>This is a funtional Component</h4>
            <p>Generated at {new Date().toUTCString()}</p>
        </div>
    )
}

export default Hello;

