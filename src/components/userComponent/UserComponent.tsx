import React, {FC, useContext} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useContextProvider} from "../../context/ContextProvide";

interface IProps{
    user: IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    const {userStore:{setFavoriteUser}} = useContextProvider()
    return (
        <div key={user.id}>
            {user.id}: {user.name} - <b>{user.username}</b> <button onClick={()=>{setFavoriteUser(user)}}>set as a favorite</button>
        </div>
    );
};

export default UserComponent;