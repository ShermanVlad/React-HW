import React from 'react';
import {useContextProvider} from "../../context/ContextProvide";
import PostComponent from "../postComponent/PostComponent";

const PostsComponent = () => {

    const {postStore: {allPosts}} = useContextProvider()

    return (
        <div>
            <ul>
                {
                    allPosts.map(post=> <li key={post.id}><PostComponent key={post.id} post={post}/></li> )
                }
            </ul>
        </div>
    );
};

export default PostsComponent;