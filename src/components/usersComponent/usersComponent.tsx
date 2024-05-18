import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/userModel";
import {apiService} from "../../services/apiService";
import UserComponent from "../userComponent/userComponent";

const UsersComponent: FC = () => {

    const [users, serUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        apiService.getUsers().then(value => serUsers(value.data))
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {
                users.map(user=> <UserComponent key={user.id} id={user.id} name={user.name}/>)
            }
        </div>
    );
};

export default UsersComponent;