import React from 'react';
import CommentComponent from "../commentComponent/CommentComponent";
import {useContextProvider} from "../../context/ContextProvide";

const CommentsComponent = () => {

    const {commentStore: {allComments}}=useContextProvider()

    return (
        <div>
            <ul>
                {
                    allComments.map(comment=> <CommentComponent key={comment.id} comment={comment}/>)
                }
            </ul>
        </div>
    );
};

export default CommentsComponent;