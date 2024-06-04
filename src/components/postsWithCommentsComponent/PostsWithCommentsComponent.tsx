import React, {useEffect, useMemo, useState} from 'react';
import PostWithCommentsComponent from "../postWithCommentsComponent/PostWithCommentsComponent";
import {useContextProvider} from "../../context/ContextProvide";
import {IPostWithComments} from "../../models/IPostWithComments";

const PostsWithCommentsComponent = () => {

    const {postStore: {allPosts}, commentStore: {allComments}} = useContextProvider();
    const [postWithCommentsState, setPostWithCommentsState] = useState<IPostWithComments[]>([])

    const postsWithCommentArr = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allPosts, allComments])

    useEffect(() => {
        setPostWithCommentsState(postsWithCommentArr)
    }, [postsWithCommentArr]);

    return (
        <div>
            {/*<PostWithCommentsComponent/>*/}
            {
                postWithCommentsState.map(postWithComment=><div key={postWithComment.id}>{postWithComment.title}<ul key={postWithComment.id}>{ postWithComment.comments.map(comment=><li key={comment.id}>{comment.id}: {comment.name}</li>)}</ul></div>)
            }
        </div>
    );
};

export default PostsWithCommentsComponent;