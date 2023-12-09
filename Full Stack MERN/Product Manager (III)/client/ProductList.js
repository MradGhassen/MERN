import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {removeFromDom,product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
        setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>All Products:</h2>
            {product.map((product, index)=>{
                return <div key={index}>
                    <Link to={`/product/${product._id}`}> {product.Title}'s Page! </Link>
                    |
                    <Link to={"/product/edit/" + product._id}>  Edit  </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}> Delete</button>
                </div>
                })
            }
        </div>
    )
}
export default ProductList;
