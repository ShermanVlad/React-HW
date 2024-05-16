import React
    , {
    FC,
    useEffect,
    useState
} from 'react';
import {
    ICommentModel
} from "../../models/ICommentModel";
import {
    apiService
} from "../../services/api.service";
import CommentComponent
    from "./commentComponent";

const CommentsComponent:FC = () => {

    const [comments, setComments]=useState<ICommentModel[]>([])
    useEffect(() => {
        apiService.getComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            <h2>Comments</h2>
            {

                comments.map(comment=> <CommentComponent key={comment.id} id={comment.id} name={comment.name}/>)
            }
        </div>
    );
};

export default CommentsComponent;