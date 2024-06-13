import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={''}>Home</NavLink></li>
                <li><NavLink to={'users'}>Users</NavLink></li>
                <li><NavLink to={'posts'}>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;