import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {dogActions} from "../../redux";

const DogForm = () => {
    const {dogForUpdate} = useSelector(state => state.dog);
    const dogInput = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (dogForUpdate) {
            dogInput.current.value = dogForUpdate.name;
        }
    }, [dogForUpdate])

    const addDog = () => {
        if (dogForUpdate) {
            dispatch(dogActions.updateDog({id:dogForUpdate.id, name:dogInput.current.value}));
        } else {
            dispatch(dogActions.add({name:dogInput.current.value}));
        }
        dogInput.current.value = '';
    }
    return (
        <div>
            <h1>Dog Input</h1>
            <input type="text" ref={dogInput}/>
            <button onClick={addDog}>add</button>
        </div>
    );
};

export {DogForm};