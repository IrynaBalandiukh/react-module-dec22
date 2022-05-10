import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const CarForm = () => {
    const {formError, carForUpdate} = useSelector(state => state.car);
    const {reset, register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate])

    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: newCar}))

        } else {
            await dispatch(carActions.create({car: newCar}))
        }
        navigate('/cars')
        reset()

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model <input type="text" {...register('model')}/></label></div>
            {formError.model && <span>{formError.model[0]}</span>}
            <div><label>price <input type="text" {...register('price')}/></label></div>
            {formError.price && <span>{formError.price[0]}</span>}
            <div><label>year <input type="text" {...register('year')}/></label></div>
            {formError.year && <span>{formError.year[0]}</span>}

            <button>save</button>
        </form>
    );
};

export {CarForm};