import React, {FC} from 'react';
import {IUserWithPostsModel} from "../../models/IUserWithPostsModel";

const UserWithPostsComponent:FC<IUserWithPostsModel> = ({username, posts, name, id}) => {
    return (
        <div>
            <h4>{username}</h4>
            <ul>
                {
                    posts.map(post=> <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    );
};

export default UserWithPostsComponent;