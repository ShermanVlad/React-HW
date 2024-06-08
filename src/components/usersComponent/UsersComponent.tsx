import React from 'react';
import UserComponent from "../userComponent/UserComponent";
import {useZustand} from "../../zustand/ContextProvide";

const UsersComponent = () => {

    const {userSlice: {allUsers}} = useZustand();

    return (
        <div>
            <ul>
                {
                    allUsers.map(user => <li key={user.id}><UserComponent user={user} key={user.id}/></li>)
                }
            </ul>
        </div>
    );
};

export default UsersComponent;