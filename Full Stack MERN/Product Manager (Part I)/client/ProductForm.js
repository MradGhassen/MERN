import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const [Descripssion, setDescripssion] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/product', {
            Title,    // this is shortcut syntax for Title: title,
            Price,      // this is shortcut syntax for Price: price
            Descripssion      // this is shortcut syntax for Descripssion: descripssion
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescripssion("");
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setTitle(e.target.value)} value={Title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)} value={Price}/>
            </p>
            <p>
                <label>Descripssion</label><br/>
                <input type="text" onChange = {(e)=>setDescripssion(e.target.value)} value={Descripssion}/>
            </p>
            <input type="submit"/>
        </form>
        
    )
}
export default ProductForm;
