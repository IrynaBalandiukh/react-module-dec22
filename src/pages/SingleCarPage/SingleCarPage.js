import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import CarDetail from "../../components/CarDetail/CarDetail";
import {carService} from "../../services";

const SingleCarPage = () => {
    const [car, setCar] = useState(null);
    const {state} = useLocation();
    const {carId} = useParams();
    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getById(carId).then(({data}) => setCar(data))
        }
    }, [])

    return (
        <div>
            {car && <CarDetail car={car}/>}
        </div>
    );
};

export {SingleCarPage};