import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const {formError} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const submit = async (newCar) => {
        await dispatch(carActions.createAsync({car:newCar}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {formError.model && <span>{formError.model[0]}</span>}
            <div><label>Price: <input type="text" {...register('price')}/></label></div>
            {formError.price && <span>{formError.price[0]}</span>}
            <div><label>Year: <input type="text" {...register('year')}/></label></div>
            {formError.year && <span>{formError.year[0]}</span>}
            <button>Save</button>
        </form>
    );
};

export {CarForm};