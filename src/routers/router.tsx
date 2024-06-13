import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/usersPage/UsersPage";
import UserPage from "../pages/userPage/UserPage";
import PostsPage from "../pages/postsPage/PostsPage";
import React from "react";
import PostPage from "../pages/postPage/PostPage";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element: <PostPage/>}
        ]},

])