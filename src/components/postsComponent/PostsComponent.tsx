import React from 'react';
import PostComponent from "../postComponent/PostComponent";
import {useZustand} from "../../zustand/ContextProvide";

const PostsComponent = () => {

    const {postSlice: {allPosts}} = useZustand()

    return (
        <div>
            <ul>
                {
                    allPosts.map(post => <li key={post.id}><PostComponent key={post.id} post={post}/></li>)
                }
            </ul>
        </div>
    );
};

export default PostsComponent;