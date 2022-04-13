import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import {User} from "../User/User";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        usersService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [])

    const getUserId = async (id) => {
        const {data} = await usersService.getById(id);
        setUser(data);
    }

    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId} getUser={getUser}/>)}
            </div>
            {user && <div>{user.name} ----- {user.username}</div>}
        </div>
    );
};

export {Users};