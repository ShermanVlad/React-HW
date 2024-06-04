import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostCommentsPage from "../pages/PostCommentsPage";

export const router= createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {
            path: 'users', element: <UsersPage/>
        },
        {
            path: 'posts', element: <PostsPage/>
        },
        {
            path: 'userPosts', element: <UserPostsPage/>
        },
        {
            path:'comments',element: <CommentsPage/>
        },
        {
            path:'postComments',element: <PostCommentsPage/>
        }
    ]
}])