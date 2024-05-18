import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/commentModel";
import {apiService} from "../../services/apiService";
import CommentComponent from "../commentComponent/commentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        apiService.getComments().then(value => setComments(value.data))
    }, []);
    return (
        <div>
            <h2>Comments</h2>
            {
                comments.map(comment=><CommentComponent key={comment.id} id={comment.id} name={comment.name} postId={comment.postId}/>)
            }
        </div>
    );
};

export default CommentsComponent;