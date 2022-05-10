import React from 'react';
import {carActions} from "../../redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const CarDetail = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteById = () => {
        dispatch(carActions.deleteById({id}))
        navigate('/cars')
    };

    return (
        <div>
            <p><b>id: {id}</b></p>
            <p><b>model: {model}</b></p>
            <p><b>price: {price}</b></p>
            <p><b>year: {year}</b></p>
            <button onClick={deleteById}>delete</button>
            <button onClick={() => {dispatch(carActions.setCarForUpdate({car}))}}>update</button>
        </div>
    );
};

export default CarDetail;