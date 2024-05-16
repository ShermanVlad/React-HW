import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout
    from "../layouts/mainLayout";
import React
    from "react";
import {
    HomePage
} from "../pages/homePage/homePage";
import {
    UsersComponent
} from "../components/usersComponent/usersComponent";
import {
    PostsComponent
} from "../components/postsComponent/postsComponent";
import CommentsComponent
    from "../components/commentsComponent/commentsComponent";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element:
                <MainLayout/>,
            errorElement: <h2>wtf???</h2>,
            children: [
                {
                    index: true,
                    element:
                        <HomePage/>
                },
                {
                    path: 'users',
                    element:
                        <UsersComponent/>
                },
                {
                    path: 'posts',
                    element:
                        <PostsComponent/>
                },
                {
                    path: 'comments',
                    element:
                        <CommentsComponent/>
                },
            ]
        },
    ]
);

export {
    router
}