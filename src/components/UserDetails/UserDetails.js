import React from 'react';
import {Button} from "../Button/Button";

const UserDetails = ({user}) => {
    const {id, name, username, email, address: {street, suite, city}, phone, website} = user;
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>email : {email}</div>
            <div>street : {street}</div>
            <div>suite : {suite}</div>
            <div>city : {city}</div>
            <div>phone : {phone}</div>
            <div>website : {website}</div>
            <br/>
            <Button to={'posts'}>get posts</Button>
        </div>
    );
};

export {UserDetails};