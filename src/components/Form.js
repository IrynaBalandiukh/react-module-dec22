import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux";

const Form = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    const addUser = () => {
        dispatch(userActions.add({name:nameInput.current.value}))
    }
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={addUser}>add</button>
        </div>
    );
};

export {Form};