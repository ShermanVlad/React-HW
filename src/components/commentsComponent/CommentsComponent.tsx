import React from 'react';
import CommentComponent from "../commentComponent/CommentComponent";
import {useZustand} from "../../zustand/ContextProvide";

const CommentsComponent = () => {

    const {commentSlice: {allComments}}=useZustand()

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