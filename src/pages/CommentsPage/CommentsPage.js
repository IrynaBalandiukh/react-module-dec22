import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentService} from "../../services";
import {Comment} from "../../components";

const CommentsPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(postId).then(({data}) => setComments(data))
    }, [postId])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};