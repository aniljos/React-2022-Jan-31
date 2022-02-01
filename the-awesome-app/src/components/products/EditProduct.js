import { Component } from "react";

class EditProduct extends Component{

    state = {
        product: null
    }

    constructor(props){
        super(props);
        this.state.product = this.props.product;


    }

    // static getDerivedStateFromProps(nextProps, currentState){

    //     //return null if no state changes
    //     // or return the updated state
    //     if(nextProps.product.id !== currentState.product.id){
    //         return {
    //             ...currentState,
    //             product: nextProps.product
    //         }
    //     }
    //     else{
    //         return null;
    //     }

    // }
    save = () => {

    }

    cancel = () => {

    }

    changeName = (evt) => {

        const value = evt.target.value;
        const updatedProduct = {...this.state.product};
        updatedProduct.name = value;
        this.setState({
            product: updatedProduct
        });
    }

    
    changeDesc = (evt) => {

        const value = evt.target.value;
        const updatedProduct = {...this.state.product};
        updatedProduct.description = value;
        this.setState({
            product: updatedProduct
        });
    }
    changePrice = (evt) => {

        const value = evt.target.value;
        const updatedProduct = {...this.state.product};
        updatedProduct.price = value ? parseFloat(value) : 0;
        this.setState({
            product: updatedProduct
        });

    }

    render(){

        const {product} = this.state;

        return (
            <div>
                <h4>Edit Product Id: {product.id}</h4>

                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Name" value={product.name} 
                                    onChange={this.changeName}/>
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" placeholder="Price" value={product.price} 
                                    onChange={this.changePrice}/>
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" placeholder="Description" value={product.description} 
                                    onChange={this.changeDesc}/>
                </div>

                <div>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default EditProduct;