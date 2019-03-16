import React from 'react';

export default function Post({title, id, body}) {
    return (
        <div className="Post">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}