import { useState } from "react"

function FaultyComponent(){

    const [state, setState] = useState("");

    const execute = () => {
        setState({
            message: "This is a simple message",
            id: 100
        })
    }

    return (
        <div>
            <h4>Faulty Component</h4>

            <div>
                <button className="btn btn-danger" onClick={execute}>Execute</button>
            </div>
            <div className="alert alert-danger">
                {state}
            </div>
        </div>
    )
}

export default FaultyComponent;