import React, {FC, useEffect, useState} from 'react';
import {getUsers} from '../servises/users.api.service';
import IUserModel from "../models/userModel";
import UserComponent from './userComponent';

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        getUsers().then(({data: {users}}) => setUsers(users))
    }, []);

    return (
        <div>
            <>{users.map(value => (<UserComponent key={value.id} item={value}/>))}</>
        </div>
    );
};

export default UsersComponent;