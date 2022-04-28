import React from 'react';

import css from './MainLayout.module.css';
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {NavigateButtons} from "../../components";
import {useAuth} from "../../hooks";

const MainLayout = () => {
    const {user, logOut} = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                {user && <h1>{user} <button onClick={() => logOut(()=>navigate('/'))}>Log out</button></h1>}
            </div>
            <hr/>
            <NavigateButtons/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};