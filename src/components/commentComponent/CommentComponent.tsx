import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";


interface IProps{
    comment: ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.id}: {comment.name} of {comment.postId} post
        </div>
    );
};

export default CommentComponent;