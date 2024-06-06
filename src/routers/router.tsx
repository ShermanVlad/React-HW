import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const router= createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {
            path: 'users', element: <UsersPage/>
        },
        {
            path: 'posts', element: <PostsPage/>
        },
        {
            path:'comments',element: <CommentsPage/>
        }
    ]
}])