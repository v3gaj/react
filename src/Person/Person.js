import React from 'react';
// import Radium from 'radium'
import './Person.css';

const person = (props) => {
    // const style = {
    //     '@media (minWidth: 500px)': {
    //         width: '450px',
    //     }
    // }
    return (
        <div className="Person">
            <p onClick={props.click}>I am a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
}

// export default Radium(person);
export default person;