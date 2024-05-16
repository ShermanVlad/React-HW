import React
    , {
    FC,
    useEffect,
    useState
} from 'react';
import {
    IUserModel
} from "../../models/IUserModel";
import {
    apiService
} from "../../services/api.service";

import UserComponent
    from "./userComponent";

const UsersComponent:FC = () => {

    const [users, setUsers]=useState<IUserModel[]>([])
    useEffect(() => {
        apiService.getUsers().then(value=> setUsers(value.data))
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {
                users.map((user)=><UserComponent key={user.id} name={user.name} id={user.id} email={user.email}/>)
            }
        </div>
    );
};

export {
    UsersComponent
};