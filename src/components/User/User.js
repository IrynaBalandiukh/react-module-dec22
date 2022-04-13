import React from 'react';

const User = ({user, getUserId, getUser}) => {
    const {id, name, username} = user;

        return (
        <div>
            id - {id} <br/>
            name - {name} <br/>
            username - {username}
            <button onClick={()=>{
                getUserId(id)
                getUser(user)
            }}>
                click</button>
            <hr/>
        </div>
    );
};

export {User};