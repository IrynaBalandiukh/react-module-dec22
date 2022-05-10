import React from 'react';
import {Link} from "react-router-dom";

const Car = ({car}) => {
    const {id, model} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <Link to={`${id}`} state={car}>
                <button>info</button>
            </Link>
            <hr/>
        </div>
    );
};

export {Car};