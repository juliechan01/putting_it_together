import React, { useEffect, useState } from 'react';

const PersonCard = (props) => {
    const [ age, setAge ] = useState(props.age);

    const clicked = () => {
        console.log("Button has been clicked!")
        const newAge = age + 1;
        setAge(newAge);
        console.log('Age:', newAge);
    }

    return (
        <div>
            <h2>{props.lName}, {props.fName}</h2>
            <p>Age: {age}</p>
            <p>Hair color: {props.hairColor}</p>
            <button onClick={clicked}>Birthday Button for {props.fName}</button>
        </div>
    );
}

export default PersonCard;