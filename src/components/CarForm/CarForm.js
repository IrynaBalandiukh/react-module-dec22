import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carsService} from "../../services";

const CarForm = ({setNewCar, carForUpdate, setUpdatedCar}) => {
    const {register,reset, handleSubmit, setValue} = useForm();

    useEffect(()=>{
        if (carForUpdate) {
            const {model,price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    },[carForUpdate])

    const submit = async (car) => {
        if (carForUpdate) {
            const {data} = await carsService.updateById(carForUpdate.id, car);
            setUpdatedCar(data);
        } else {
            const {data} =  await carsService.create(car);
            setNewCar(data);
        }
       reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>submit</button>
        </form>
    );
};

export {CarForm};