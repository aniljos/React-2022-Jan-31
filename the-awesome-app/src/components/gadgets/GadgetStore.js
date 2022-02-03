import { useEffect, useState } from "react";
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {createSetProductAction} from '../../redux/actionCreator';

function GadgetStore(){

    ///const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector(state => state.shop.products);

    useEffect(() => {

        fetchProducts();

    }, []);

    async function fetchProducts(){

        // const url = process.env.REACT_APP_PRODUCTS_URL;
        // try {
            
        //     const resp = await axios.get(url);
        //     setProducts(resp.data);

        // } catch (error) {
        //     console.log(error);
        // }

        dispatch(createSetProductAction());

    }

    function addToCart(product){

        const payload = {product, quantity: 1};
        dispatch({type: "ADD_TO_CART", payload });

    }


    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button href="#" className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }



    return (
        <div>
            <h3>Gadget Store</h3>

            {renderProducts()}
        </div>
    )
}

export default GadgetStore;