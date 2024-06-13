import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../redux/store";
import {postsActions} from "../../redux/slices/userSlice/postSlice";
import PostsComponent from "../../components/postsComponent/PostsComponent";

const PostsPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsActions.loadPosts())
    }, []);

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;