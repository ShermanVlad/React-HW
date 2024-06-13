import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice/userSlice";
import {NavLink} from "react-router-dom";

const UserPage = () => {
    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userSlice);
    useEffect(() => {
        if (id) {
            dispatch(userActions.loadUserById(id));
        }
    }, [id]);

    return (
        <div>
            {
                user && <h4>{user.id}: {user.name}</h4>
            }
            {/*<button><NavLink to={'users'}>back</NavLink></button>*/}
        </div>
    );
};

export default UserPage;