import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/postModel";
import {apiService} from "../services/apiService";
import PostComponent from "../components/postComponent/postComponent";

const PostsPage = () => {
    const {userId}=useParams()

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if(userId){
        apiService.getPostsOfUsers(userId).then(value => setPosts(value.data))
        }
    }, [userId]);

    return (
        <div>
            <h2>Posts of this user</h2>
            {
                posts.map(post => <PostComponent key={post.id} id={post.id} title={post.title} userId={post.userId}/>)
            }
        </div>
    );
};

export default PostsPage;