import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/postModel";
import {apiService} from "../../services/apiService";
import PostComponent from "../postComponent/postComponent";
import {Outlet} from "react-router-dom";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        apiService.getPosts().then(value => setPosts(value.data))
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {
                posts.map(post => <PostComponent key={post.id} id={post.id} title={post.title} userId={post.userId}/>)
            }
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsComponent;