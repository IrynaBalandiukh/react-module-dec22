import React from 'react';

const User = ({user}) => {
    const {id, name} = user;
    console.log(user);
    console.log(name);
    return (
        <div>
            {id} -- {name}
        </div>
    );
};

export {User};