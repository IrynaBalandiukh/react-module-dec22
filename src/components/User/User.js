import React from 'react';
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>
                {id} -- {name}
            </div>
            <Button to={`${id}`} state={user}>get details</Button>
            <br/>
        </div>
    );
};

export {User};