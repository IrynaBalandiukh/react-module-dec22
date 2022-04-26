import React from 'react';

import css from './MainLayout.module.css';
import {NavLink, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};