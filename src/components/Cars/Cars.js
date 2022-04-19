import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    useEffect(() => {
        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars([...cars]);
        }
    }, [updatedCar])

    useEffect(() => {
        if (deletedCarId) {
            setCars(prevState => prevState.filter(car => car.id !== deletedCarId))
        }
    }, [deletedCarId])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setDeletedCarId={setDeletedCarId} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};