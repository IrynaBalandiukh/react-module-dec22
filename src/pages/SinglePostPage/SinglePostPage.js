import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
        } else {
           postService.getById(postId).then(({data}) => setPost(data))
        }
    }, [postId, state]);

    return (
        <div>
            <div>{post && <PostDetails post={post}/>}</div>
            <Outlet/>
        </div>
    );
};

export {SinglePostPage};