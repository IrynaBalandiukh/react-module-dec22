import React, {useRef} from 'react';
import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {logIn} = useAuth();
    const {state} = useLocation();
    const name = useRef();
    const navigate = useNavigate();

    const login = () => {
        const userName = name.current.value;
        logIn(userName, () => navigate(state.pathname, {replace: true}))
    }

    return (
        <div>
            <input type="text" placeholder={'name'} ref={name}/>
            <button onClick={() => login()}>login</button>
        </div>
    );
};

export {LoginPage};