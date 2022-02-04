import { Component } from "react";

class AppErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, info) {

        if (error) {
            this.setState({
                hasError: true
            })
        }
        else {
            this.setState({
                hasError: false
            })
        }

    }
    render() {

        if (this.state.hasError) {
            return (
                <div className="alert alert-danger">
                    Something with wrong. Please come back later
                </div>
            )
        }
        else {
            return this.props.children;
        }


    }
}

export default AppErrorBoundary;