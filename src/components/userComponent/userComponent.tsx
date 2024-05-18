import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel";
import {useNavigate} from "react-router-dom";

const UserComponent: FC<IUserModel> = ({...user}) => {
    const navigate=useNavigate()
    return (
        <div>
            <h4>{user.id}: {user.name}</h4>
            <button onClick={()=>{ navigate(user.id.toString(), {state: {id: 'userId'}});}}>See posts</button>
        </div>
    );
};

export default UserComponent;