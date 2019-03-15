import React from 'react';

export default function FavoriteMovie(props) {
    return (
        <div className="FavoriteMovie">
        <h2>This is my favorite movie</h2>
        <img src="https://via.placeholderimage.com/150" alt="movie poster"/>
        <ul>
            <li>Movie title</li>
            <li>Movie description</li>
            <li>Movie date</li>
        </ul>
        </div>
    )
}