import { Component } from 'react';
import axios from 'axios';
import './ListProducts.css';

class ListProducts extends Component {

    state = {
        products: []
    }
    url = "";

    constructor(props){
        super(props);
        this.url = "http://localhost:9000/products";
    }

    componentDidMount() {

        ///const url = "http://localhost:9000/products";
        axios
            .get(this.url)
            .then((resp) => {

                console.log("success", resp);
                this.setState({
                    products: resp.data
                });

            }, (resp) => {
                console.log("error", resp);
            });

    }

    delete = async (product, index) => {

        console.log("deleting..", product, index);
        const deleteUrl = this.url + "/" + product.id;

        try{

            const resp = await axios.delete(deleteUrl);
            //create a copy of the immutable object(state)
            const products = [...this.state.products];
            //modify(update) the copy
            products.splice(index, 1);
            //update the state(setState)
            this.setState({
                products: products
            });

            alert("The product has been deleted");
        }
        catch(error){
            alert("The product not found");
        }

        

        

    }

    renderProducts(){
        return this.state.products.map((item, index) => {
            return (
                <div key={item.id} className='product'>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Price: {item.price}</p>

                    <div>
                        <button onClick={() => { this.delete(item, index) }}>Delete</button>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>List Products</h3>

                <div style={{display: 'flex', flexFlow: "row wrap", justifyContent: "center"}}>
                    {this.renderProducts()}
                </div>
            </div>
        )
    }
}

export default ListProducts;