import React from 'react';
import {useContextProvider} from "../../context/ContextProvide";
import UserComponent from "../userComponent/UserComponent";
import {IUserModel} from "../../models/IUserModel";

const UsersComponent = () => {

    const {userStore: {allUsers}} = useContextProvider();

    return (
        <div>
            <ul>
                {allUsers.map(user => <li key={user.id}><UserComponent user={user} key={user.id}/></li>)}
            </ul>
        </div>
    );
};

export default UsersComponent;