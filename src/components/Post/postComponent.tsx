import React
    , {
    FC
} from 'react';
import {
    IPostModel
} from "../../models/Post/postModel";
import styles from "./post.module.css"

type IProps={
        post: IPostModel,
    }
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div key={post.id} className={styles.PostDiv}>
            <h2 key={post.id+2}>{post.title}</h2>
            <h3 key={post.id+3}>{post.body}</h3>
            <ul key={post.id+4}><b>Tags</b>:
                {post.tags.map((tag,index)=><li key={index}>{tag}</li>)}
            </ul>
            <h5  key={post.id+1}>Post ID: {post.id}</h5>
            <h5 key={post.id+5}>Created by user with ID: {post.userId}</h5>
            <h5 key={post.id+6}>Reactions: {post.reactions}</h5>
            <hr key={post.id+7}/>
        </div>
    );
};

export default PostComponent;