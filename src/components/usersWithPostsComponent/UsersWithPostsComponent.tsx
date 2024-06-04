import React, {useEffect, useMemo, useState} from 'react';
import {IUserWithPostsModel} from "../../models/IUserWithPostsModel";
import {useContextProvider} from "../../context/ContextProvide";

const UsersWithPostsComponent = () => {

    const {userStore: {allUsers}, postStore: {allPosts}} = useContextProvider();
    const [usersWithPostsState, setUsersWithPostsState] = useState<IUserWithPostsModel[]>([]);

    const userWithPostsArr = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)};
            })
        }
    }, [allPosts, allUsers])

    useEffect(() => {
        setUsersWithPostsState(userWithPostsArr)
    }, [userWithPostsArr]);

    return (
        <div>
            {
                usersWithPostsState.map(userWithPosts => <div key={userWithPosts.id}>{userWithPosts.username}
                    <ul> {userWithPosts.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
                </div>)
            }
        </div>
    );
};

export default UsersWithPostsComponent;