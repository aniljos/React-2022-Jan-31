

// Higher-order component==> function==> receives the component
function simpleHOC(component){

    const Component = component
    //return a new component
    return (props) => {

        //login read form localstorage => store 
        //let ls = ""

        return (
            <div style={{border: "2px solid red", padding: "17px"}}>
                <Component {...props} />
            </div>
        );
    }

}

export default simpleHOC;