import axios from 'axios';
import React, { useEffect } from 'react';

const SimpleProducts = () => {

    useEffect(() => {
        getProducts();
     }, []);

    const getProducts = async () => { 
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
    }


    return (
        <div>
            
        </div>
    );
}

export default SimpleProducts;
