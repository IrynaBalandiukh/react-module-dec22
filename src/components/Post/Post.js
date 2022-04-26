import React from 'react';

import {Button} from "../Button/Button";

const Post = ({post, flag}) => {
    const {id, title} = post;

    return (
        <div>
            <div>{id} -- {title}</div>
            {
                flag &&  <Button to={`${id}`} state={post}>get details</Button>
            }
        </div>
    );
};

export {Post};