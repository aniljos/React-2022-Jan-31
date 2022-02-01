import {Component} from 'react';
import axios from 'axios';


class ListProducts extends Component{


    componentDidMount(){

        const url = "http://localhost:9000/products";
        axios
            .get(url)
            .then((resp) => {
                console.log("success", resp);
            }, (resp) => {
                console.log("error", resp);
            });

    }

    render(){
        return (
            <div>
                <h3>List Products</h3>
            </div>
        )
    }
}

export default ListProducts;