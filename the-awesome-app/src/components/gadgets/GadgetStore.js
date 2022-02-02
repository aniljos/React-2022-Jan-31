import { useEffect, useState } from "react";
import axios from 'axios';

function GadgetStore(){

    const [products, setProducts] = useState([]);

    useEffect(async () => {

        const url = process.env.REACT_APP_PRODUCTS_URL;
        try {
            
            const resp = await axios.get(url);
            setProducts(resp.data);

        } catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <div>
            <h3>Gadget Store</h3>
        </div>
    )
}

export default GadgetStore;