import React from 'react';

const User = (user) => {
    const {id, name, username} = user;

    return (
        <div>
            /nid - {id}
            /nname - {name}
            /nusername - {username}
            <hr/>
        </div>
    );
};

export {User};