import React
    , {
    FC
} from 'react';
import {
    IUserModel
} from "../../models/IUserModel";

const UserComponent:FC<IUserModel> = ({...user}) => {
    return (
        <div>
            <h4>{user.id} - {user.name} - {user.email}</h4>
        </div>
    );
};

export default UserComponent;