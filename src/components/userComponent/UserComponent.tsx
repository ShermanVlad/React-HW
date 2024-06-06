import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useZustand} from "../../zustand/ContextProvide";

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    const {userSlice:{setFavoriteUser}} = useZustand()
    return (
        <div key={user.id}>
            {user.id}: {user.name} - <b>{user.username}</b> <button onClick={()=>{setFavoriteUser(user)}}>set as a favorite</button>
        </div>
    );
};

export default UserComponent;