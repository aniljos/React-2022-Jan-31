import { Component } from "react";



class Counter extends Component{

    //considered to be immutable
    state = {
        count: 5,
        message: "hello counter"
    }

    //arrow function(event handlers --> always use arrow function)
    inc=() => {

        console.log("in inc...", this);
        ///this.state.count++;
        const updatedCount = this.state.count + 1; 

        //setState is asynchronous
        //setState(slice of the new state, callback invoked after the state is update)
        this.setState({
           count:  updatedCount
        }, () => {
            console.log(this.state);
        });
        
    }

    decr = () => {
        const updatedCount = this.state.count -1;
        this.setState({
            count: updatedCount
        });
    }

    render(){
        //return JSX
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h4>Counter: {this.state.count}</h4>
                <p>Message: {this.state.message}</p>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
            </div>
        )
    }
}

export default Counter;