import React
    , {
    useEffect,
    useState
} from 'react';
import {
    IPostModel
} from "../../models/IPostModel";
import {
    apiService
} from "../../services/api.service";
import PostComponent
    from "./postComponent";

const PostsComponent = () => {
    
    const [posts,setPosts]=useState<IPostModel[]>([])
    useEffect(() => {
        apiService.getPosts().then(value => setPosts(value.data));
    }, []);
    return (
        <div>
            <h2>Posts</h2>
            {
                posts.map(post=><PostComponent id={post.id} title={post.title} key={post.id}/>)
            }
        </div>
    );
};

export {
    PostsComponent
};