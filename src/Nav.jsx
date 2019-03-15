import React from 'react';
import { Link as A } from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav>
            <A to="/">Homepage</A>
            <A to="/blog">Main Blog</A>
            <A to="/movie">Favorite Movie</A>
            <A to="/food">Favorite Food</A>
            <A to="/about">About Me</A>
        </nav>
    )
}