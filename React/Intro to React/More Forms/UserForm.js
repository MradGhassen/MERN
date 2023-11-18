import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLasttname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmpassword] = useState("");     
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    	setFirstname("");
    	setLasttname("");
    	setEmail("");
    	setPassword("");
    	setConfirmpassword("");
    };
    
    return(
        <form  onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            {firstname.length < 2 ? (
            <p>First Name must be at least 2 characters</p>
            ) : null}
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLasttname(e.target.value) } />
            </div>
            {lastname.length < 2 ? (
            <p>Last Name must be at least 2 characters</p>
            ) : null}
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {email.length < 5 ? <p>Email must be at least 5 characters</p> : null}
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {password.length < 8 ? (
            <p>Password must be at least 8 characters</p>
            ) : null}
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
            {confirmpassword !== password ? <p>Passwords must match</p> : null}
        </form>
    );
};
    
export default UserForm;
