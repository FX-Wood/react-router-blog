import React from 'react';
import { Link as A } from 'react-router-dom';

export default function MainBlog({posts}) {
    return (
        <div className="MainBlog">
        <h2>This is the main blog</h2>
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <div className="post">
                                <A className="postTitle" to={'/post/' + post.id } ><h4>{post.title}</h4></A>
                                <p className="postBody">{post.body}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}