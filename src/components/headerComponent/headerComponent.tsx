import React
    from 'react';
import {
    NavLink
} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <h2>Header</h2>
            <NavLink to={"/"}>Home </NavLink>
            <NavLink to={"users"}>Users </NavLink>
            <NavLink to={"posts"}>Posts </NavLink>
            <NavLink to={"comments"}>Comments </NavLink>
            <hr/>
        </div>
    );
};

export default HeaderComponent;