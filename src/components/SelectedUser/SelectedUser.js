import React from 'react';

const SelectedUser = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            id - {id} <br/>
            name - {name} <br/>
            username - {username} <br/>
            email - {email}
            <hr/>
        </div>
    );
};

export {SelectedUser};