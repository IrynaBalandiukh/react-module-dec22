import React, {useEffect, useState} from 'react';
import {Outlet, useParams, useSearchParams} from "react-router-dom";

import css from './PostsPage.module.css';
import {postService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {userId} = useParams();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (userId) {
            postService.getByUserId(userId).then(({data}) => setPosts(data))
        } else {
            postService.getAll(query.get('page')).then(({data}) => setPosts(data))
        }
    }, [userId, query])

    const nextPage = () => {
        // let page = query.get('page');
        // page = +page + 1;
        // setQuery({page: page.toString()})

        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        setQuery(queryObj)
    }

    return (
        <div className={css.wrapper}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}
                <button onClick={() => nextPage()}>next page</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};