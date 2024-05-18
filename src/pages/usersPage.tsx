import React from 'react';
import UsersComponent from "../components/usersComponent/usersComponent";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;