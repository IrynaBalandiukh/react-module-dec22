import React from 'react';

const SelectedUser = ({user, getUserId}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            id: {id} <br/>
            name: {name} <br/>
            username: {username} <br/>
            email: {email}
            <button onClick={() => getUserId(id)}>get posts</button>
        </div>
    );
};

export {SelectedUser};