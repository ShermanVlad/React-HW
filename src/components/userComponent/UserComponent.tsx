import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useNavigate} from "react-router";

type IProps={
    user: IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    let navigate = useNavigate();
    return (
        <div>
            <h4>{user.id}: {user.name}</h4>
            <button onClick={()=>{
                navigate(user.id.toString())
            }}></button>
        </div>
    );
};

export default UserComponent;