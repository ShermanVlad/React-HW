import React, {FC} from 'react';
import {ICommentModel} from "../../models/commentModel";
import {NavLink, useNavigate} from "react-router-dom";

const CommentComponent:FC<ICommentModel> = ({...comment}) => {
    const navigate=useNavigate()

    return (
        <div>
            <h4>{comment.id}: {comment.name} of post {comment.postId}</h4>
        </div>
    );
};

export default CommentComponent;