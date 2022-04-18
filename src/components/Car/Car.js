import React from 'react';
import {carsService} from "../../services";

const Car = ({car, setDeletedCarId, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id);
        setDeletedCarId(id);
    }

    return (
        <div>
            <div>{id}</div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=> deleteCar()}>delete</button>
            <button onClick={()=> setCarForUpdate(car)}>update</button>
            <br/>
        </div>
    );
};

export {Car};