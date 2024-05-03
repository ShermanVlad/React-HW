import React, {FC, useEffect, useState} from 'react';
import IUserModel from '../models/userModel';
import {getSingleUser} from '../servises/users.api.service';

type IProps = { item: IUserModel }
const UserComponent: FC<IProps> = ({item}) => {
    // const [user, setUser] = useState<IUserModel>()
    // useEffect(() => {
    //     getSingleUser(item.id).then(user=> console.log(user))
    // }, []);
    return (
        <div>
            <h2>User: {item.id}: {item.lastName} {item.firstName}</h2>
            <button>Choose</button>
        </div>
    );
};

export default UserComponent;