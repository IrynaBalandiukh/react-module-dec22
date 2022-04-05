import React, {useEffect, useState} from 'react';
import {Comment} from "../Comment/Comment";
import {commentsService} from "../../services";

export const Comments = () => {
    const [comments, setComment] = useState(null);

    useEffect(() => {
        commentsService.getAllComments().then(value => setComment(value))
    }, [])

    return (
        <div>
            {
                comments && comments.map((comment) => <Comment key={comment.id} comment={comment} />)
            }
        </div>
    );
};