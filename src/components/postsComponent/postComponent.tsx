import React
    , {
    FC
} from 'react';
import {
    IPostModel
} from "../../models/IPostModel";

const PostComponent:FC<IPostModel> = ({...post}) => {
    return (
        <div>
            <h4>{post.id}: {post.title}</h4>
        </div>
    );
};

export default PostComponent;