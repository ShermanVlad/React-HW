import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>home</NavLink></li>
                <li><NavLink to={'users'}>users</NavLink></li>
                <li><NavLink to={'posts'}>posts</NavLink></li>
                <li><NavLink to={'userPosts'}>users with posts</NavLink></li>
                <li><NavLink to={'comments'}>comments</NavLink></li>
                <li><NavLink to={'postComments'}>posts with comments</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;