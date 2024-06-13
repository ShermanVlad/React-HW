import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsActions} from "../../redux/slices/userSlice/postSlice";

const PostPage = () => {

    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {post}=useAppSelector(state => state.postSlice)

    useEffect(() => {
        if (id) {
            dispatch(postsActions.loadPostById(id))
        }
    }, [id]);

    return (
        <div>
            {
                post && <h4>{post.id}: {post.title}</h4>
            }
        </div>
    );
};

export default PostPage;