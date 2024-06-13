import React, {useEffect} from 'react';
import {useAppDispatch} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice/userSlice";
import UsersComponent from "../../components/usersComponent/UsersComponent";

const UsersPage = () => {
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;