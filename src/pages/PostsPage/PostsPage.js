import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import css from './PostsPage.module.css';
import {postService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        if (userId) {
            postService.getByUserId(userId).then(({data}) => setPosts(data))
        } else {
            postService.getAll().then(({data}) => setPosts(data))
        }
    }, [userId])
    return (
        <div className={css.wrapper}>
            <div>{posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}</div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};