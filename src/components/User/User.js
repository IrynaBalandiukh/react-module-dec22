import React from 'react';

const User = ({user, getUser, trigger}) => {
    const {id, name, username} = user;

    const click = () => {
        getUser(user)
        trigger()
    }

    return (
        <div>
            id: {id} <br/>
            name: {name} <br/>
            username: {username} <br/>
            <button onClick={() => click()}>click</button>
            <hr/>
        </div>
    );
};

export {User};