import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {userId} = useParams();
    const {state} = useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            setUser(state);
        } else {
            userService.getById(userId).then(({data}) => setUser(data))
        }
    }, [userId, state]);

    return (
        <div>
            <div>{user && <UserDetails user={user}/>}</div>
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};