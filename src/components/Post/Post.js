import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            id: {id} <br/>
            title: {title} <br/>
            body: {body}
            <hr/>
        </div>
    );
};

export {Post};