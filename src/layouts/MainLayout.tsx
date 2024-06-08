import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";
import {useZustand} from "../zustand/ContextProvide";
import {commentsService, postService, userService} from "../services/api.service";
const MainLayout = () => {

    const {userSlice,userSlice: {favoriteUser}} = useZustand()
    const {postSlice} = useZustand()
    const {commentSlice} = useZustand()

    useEffect(() => {
        userService.getUsers().then(value => userSlice.loadUsers(value.data))
        postService.getPosts().then(value => postSlice.loadPosts(value.data))
        commentsService.getComments().then(value => commentSlice.loadComments(value.data))
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <hr/>
            {favoriteUser && <div>{favoriteUser.username}</div>}
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;