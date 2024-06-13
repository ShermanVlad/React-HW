import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useNavigate, useParams} from "react-router";

type IProps={
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {

    const navigate = useNavigate()

    return (
        <div>
            {
                <h4>{post.id}: {post.title}</h4>
            }
            <button onClick={()=>{
                navigate(post.id.toString())
            }}>see more</button>
        </div>
    );
};

export default PostComponent;