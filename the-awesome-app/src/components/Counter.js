import React, { Component } from "react";



class Counter extends Component {

    //ES7
    //considered to be immutable
    state = {
        count: 5,
        message: "hello counter"
    }

    inputRef = React.createRef()

    constructor(props){
        super(props);

        //ES6
        this.decr = this.decr.bind(this);

        //ES6
        // this.state = {
        //     count: 5,
        //     message: "hello counter"
        // }
    }


    //ES 7
    //arrow function(event handlers --> always use arrow function)
    inc = () => {

        console.log("in inc...", this);
        ///this.state.count++;
        const updatedCount = this.state.count + 1;

        //setState is asynchronous
        //setState(slice of the new state, callback invoked after the state is updated)
        this.setState({
            count: updatedCount
        }, () => {
            console.log(this.state);
        });



    }

    // decr = () => {
    //     const updatedCount = this.state.count - 1;
    //     this.setState({
    //         count: updatedCount
    //     });
    // }

    decr(){
        const updatedCount = this.state.count - 1;
        this.setState({
            count: updatedCount
        });
    }

    change = (evt) => {



        this.setState({
            count : evt.target.value ? parseInt(evt.target.value) : 0
        });
    }

    update = (evt) => {

        console.log(evt)

        //console.log(this.inputRef);
        const value = this.inputRef.current.value;

        if(value){
            this.setState({
                count: parseInt(value)
            });
        }
        
    }

    render() {
        //return JSX
        return (
            <>
                <div>
                    <h3>{this.props.title}</h3>
                    <h4>Counter: {this.state.count}</h4>
                    <p>Message: {this.state.message}</p>
                    <div>
                        <button onClick={this.inc}>Inc</button>&nbsp;
                        <button onClick={this.decr}>Decr</button>
                    </div>

                    <div>
                        {/* Controlled input */}
                        Count: <input type="number" value={this.state.count} onChange={this.change}/>
                    </div>

                    <div>
                        {/* Uncontrolled input */}
                        Value: <input ref={this.inputRef} type="number"/> &nbsp; 
                        <button onClick={this.update}>Update</button> 
                    </div>
                </div>
                <div></div>
            </>
        )
    }
}

export default Counter;