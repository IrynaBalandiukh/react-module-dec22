import React from 'react';

export const Comment = ({comment}) => {
    return (
        <div>
            <span>{comment.name}</span>
            <span>{comment.email}</span>
            <span>{comment.body}</span>
            <hr/>
        </div>
    );
};