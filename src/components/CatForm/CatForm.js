import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {catActions} from "../../redux";

const CatForm = () => {
    const {catForUpdate} = useSelector(state => state.cat)
    const dispatch = useDispatch();
    const catInput = useRef();

    useEffect(() => {
        if(catForUpdate) {
            catInput.current.value = catForUpdate.name;
        }
    }, [catForUpdate])

    const addCat = () => {
        if (catForUpdate) {
            dispatch(catActions.updateCat({id: catForUpdate.id, name:catInput.current.value}))
        } else {
            dispatch(catActions.add({name: catInput.current.value}))
        }
        catInput.current.value = '';
    }
    return (
        <div>
            <h1>Cat Input</h1>
            <input type="text" ref={catInput}/>
            <button onClick={addCat}>add</button>
        </div>
    );
};

export {CatForm};