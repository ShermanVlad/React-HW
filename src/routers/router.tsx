import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../pages/homePage";
import PostsComponent from "../components/postsComponent/postsComponent";
import CommentsComponent from "../components/commentsComponent/commentsComponent";
import UsersPage from "../pages/usersPage";
import PostsPage from "../pages/postsPage";
import CommentsPage from "../pages/commentsPage";

const router = createBrowserRouter([{
    path: "/", element: <MainLayout/>, errorElement: "wtf???", children: [
        {index: true, element: <HomePage/>},
        {
            path: 'users', element: <UsersPage/>, children: [
                {path: ':userId', element: <PostsPage/>}
            ]
        },
        {path: 'posts', element: <PostsComponent/>, children: [
            {path: ":postId", element: <CommentsPage/>}
            ]
        },
        {path: 'comments', element: <CommentsComponent/>}
    ]
}])

export default router;