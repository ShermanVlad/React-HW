import React, {FC} from 'react';
import {IPostWithComments} from "../../models/IPostWithComments";

const PostWithCommentsComponent:FC<IPostWithComments> = ({comments, id, body, userId, title}) => {
    return (
        <div>
            {title}
            <ul>
                {
                    comments.map(comment=> <li key={comment.id}>{comment.name}</li>)
                }
            </ul>
        </div>
    );
};

export default PostWithCommentsComponent;