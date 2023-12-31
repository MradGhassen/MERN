import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = () => {
    const [product, setProduct] = useState([]);
    
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId)); //We could also write this in our ProductList component
    }
    
    return (
        <div>
            <ProductForm product={product} setProduct={setProduct}/>
            <hr/>
            <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
