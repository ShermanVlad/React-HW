import React
    , {
    FC
} from 'react';
import {
    ICommentModel
} from "../../models/ICommentModel";

const CommentComponent:FC<ICommentModel> = ({...comment}) => {
    return (
        <div>
            <h4>{comment.id}: {comment.name}</h4>
        </div>
    );
};

export default CommentComponent;