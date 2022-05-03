import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux";

const Counter = () => {

    const {count1, count2} = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count1: {count1}</h1>
            <button onClick={() => dispatch(counterActions.incCount1())}>inc</button>
            <button onClick={() => dispatch(counterActions.decCount1())}>dec</button>
            <button onClick={() => dispatch(counterActions.resetCount1())}>reset</button>
            <hr/>
            <h1>Count2: {count2}</h1>
            <button onClick={() => dispatch(counterActions.incCount2())}>inc</button>
            <button onClick={() => dispatch(counterActions.decCount2())}>dec</button>
            <button onClick={() => dispatch(counterActions.resetCount2())}>reset</button>
        </div>
    );
};

export {Counter};