import React from 'react';
import {useNavigate} from "react-router-dom";

const NavigateButtons = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>prev</button>
            <button onClick={() => navigate(1)}>next</button>
        </div>
    );
};

export {NavigateButtons};