import React, { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge ] = useState(props.initialAge);

    return (
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {age}</p>
            <p>hairColor : {props.hairColor}</p>
            <button onClick ={(event)=> setAge( age +1)} >  birthday button for {props.lastName} {props.firstName} </button>
        </div>
    );
}
export default PersonCard;
