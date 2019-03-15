import React from 'react';

export default function MainBlog({posts}) {
    return (
        <div className="MainBlog">
        <h2>This is the main blog</h2>
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <div className="post">
                                <h4 className="postTitle">{post.title}</h4>
                                <p className="postBody">{post.body}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}