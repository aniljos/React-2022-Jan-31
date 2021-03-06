import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import './ListProducts.css';
import EditProduct from './EditProduct';
import {connect} from 'react-redux';

class ListProducts extends Component {

    state = {
        products: [],
        selectedProduct: null
    }
    url = "";
    editProductRef = React.createRef();
    //count = 0;

    constructor(props) {
        super(props);
        //this.url = "http://localhost:9000/products";
        this.url = process.env.REACT_APP_PRODUCTS_URL;
        console.log("[ListProducts constructor]");
    }

    componentDidMount() {

        console.log("[ListProducts componentDidMount]");
        ///const url = "http://localhost:9000/products";
        // Authorization : 'Bearer {theaccesstoken}'


        const headers = { "Authorization": `Bearer ${this.props.auth.accessToken}`};

        axios
            .get(this.url, {headers})
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

    editUpdate = async (updatedProduct) => {
        
        console.log("editUpdate", updatedProduct);
        try{

            const updateUrl = this.url + "/" + updatedProduct.id;
            const resp = await axios.put(updateUrl, updatedProduct);
            const updateProducts = [...this.state.products];
            const index = updateProducts.findIndex(item => item.id === updatedProduct.id);
            if(index !== -1){
                updateProducts[index]= updatedProduct;
                this.setState({
                    products: updateProducts,
                    selectedProduct: null
                });
                alert("Product updated");
            }

        }
        catch(err){
            alert("Failed to updated");
        }


    }

    editCancel = (message) => {
        console.log("editCancel", message);

        this.setState({

            selectedProduct: null

        }, () => {
            alert("Edit Cancelled");
        });
    }

    renderProducts() {
        return this.state.products.map((item, index) => {
            return (
                <div data-testid="product" key={item.id} className='product'>
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

    callChildFn = () => {

        //console.log(this.editProductRef.current);
        if(this.editProductRef.current){
            console.log(this.editProductRef.current);
            this.editProductRef.current.showProductDetails();
        }
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
                    <button onClick={this.callChildFn}>Call Child Function</button>
                </div>
                <div>
                    {this.state.selectedProduct !== null ? 
                                <EditProduct 
                                            ref={this.editProductRef}
                                            key={this.state.selectedProduct.id} 
                                            product={this.state.selectedProduct}
                                            onUpdate={this.editUpdate}
                                            onCancel={this.editCancel} /> 
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ListProducts);