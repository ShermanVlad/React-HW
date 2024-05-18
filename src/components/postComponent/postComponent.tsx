import React, {FC} from 'react';
import {IPostModel} from "../../models/postModel";
import {useNavigate} from "react-router-dom";

const PostComponent:FC<IPostModel> = ({...post}) => {

    const navigate=useNavigate()

    return (
        <div>
            <h4>{post.id}: {post.title} by user {post.userId}</h4>
            <button onClick={() => {
                navigate(post.id.toString(), {state: {id: 'postId'}});
            }}>See comments
            </button>

        </div>
    );
};

export default PostComponent;