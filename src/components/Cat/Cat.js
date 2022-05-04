import React from 'react';
import {useDispatch} from "react-redux";

import {catActions} from "../../redux";

const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {cat.id} -- {cat.name}
            <button onClick={() => dispatch(catActions.setCatForUpdate({cat}))}>update</button>
            <button onClick={() => dispatch(catActions.deleteById(cat.id))}>delete</button>
        </div>
    );
};

export {Cat};