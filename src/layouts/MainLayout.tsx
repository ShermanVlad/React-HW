import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import FooterComponent from "../components/footerComponent/FooterComponent";
import {Context} from "../context/ContextProvide";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {commentsService, postService, userService} from "../services/api.service";
import {ICommentModel} from "../models/ICommentModel";

const MainLayout = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [comments, setComment] = useState<ICommentModel[]>([])
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null)
    
    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentsService.getComments().then(value => setComment(value.data));
    }, []);

    const setFavoriteUser=(user:IUserModel)=>{
        setFavoriteUserState(user)
    }

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavoriteUser: (user: IUserModel)=> setFavoriteUser(user)
                },
                postStore: {
                    allPosts: posts
                },
                commentStore:{
                    allComments: comments}
            }}>

                <Outlet/>
            </Context.Provider>
            <hr/>
            {favoriteUserState && <div>{favoriteUserState.name}</div>}
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;