import { Component, PureComponent } from 'react';
import axios from 'axios';
import './ListProducts.css';
import EditProduct from './EditProduct';

class ListProducts extends PureComponent {

    state = {
        products: [],
        selectedProduct: null
    }
    url = "";

    constructor(props) {
        super(props);
        this.url = "http://localhost:9000/products";
        console.log("[ListProducts constructor]");
    }

    componentDidMount() {

        console.log("[ListProducts componentDidMount]");
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

        try {
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
        catch (error) {
            alert("The product not found");
        }
    }

    edit = (product) => {
        this.setState({
            selectedProduct: product
        });
    }

    renderProducts() {
        return this.state.products.map((item, index) => {
            return (
                <div key={item.id} className='product'>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Price: {item.price}</p>

                    <div>
                        <button onClick={() => { this.delete(item, index) }}>Delete</button>&nbsp;
                        <button onClick={() => { this.edit(item) }}>Edit</button>
                    </div>
                </div>
            );
        })
    }

    render() {
        console.log("[ListProducts render]");
        return (
            <div>
                <h3>List Products</h3>

                <div style={{ display: 'flex', flexFlow: "row wrap", justifyContent: "center" }}>
                    {this.renderProducts()}
                </div>

                <div>
                    {this.state.selectedProduct !== null ? 
                                <EditProduct key={this.state.selectedProduct.id} product={this.state.selectedProduct} /> 
                                : null}
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        )
    }

    componentWillMount(){
        console.log("[ListProducts componentWillMount]");
    }

    componentWillReceiveProps(){
        console.log("[ListProducts componentWillReceiveProps]");
    }
    // shouldComponentUpdate(nexpProps, nextState){

        
    //     console.log("[ListProducts shouldComponentUpdate]");
    //     return true;
    // }
    componentWillUpdate(){
        console.log("[ListProducts componentWillUpdate]");
    }
    componentDidUpdate(){
        console.log("[ListProducts componentDidUpdate]");
    }

    componentWillUnmount(){
        console.log("[ListProducts componentWillUnmount]");
    }


}

export default ListProducts;