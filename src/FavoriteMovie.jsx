import React from 'react';
import FilmDetails from './FilmDetails';

export default function FavoriteMovie({movies}) {
    return (
        <div className="FavoriteMovie">
        <h2>My favorite movies!</h2>
        {movies.map(movie => <FilmDetails key={movie.id} film={movie} /> )}
        </div>
    )
}