import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/commentModel";
import {apiService} from "../services/apiService";
import CommentComponent from "../components/commentComponent/commentComponent";

const CommentsPage = () => {
    const {postId}=useParams()
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        if (postId){
            apiService.getCommentsOfPosts(postId).then(value => setComments(value.data))
        }
    }, [postId]);
    return (
        <div>
            <h2>Comments of this post</h2>
            {
                comments.map(comment=> <CommentComponent postId={comment.postId} id={comment.id} name={comment.name} key={comment.id}/>)
            }
        </div>
    );
};

export default CommentsPage;