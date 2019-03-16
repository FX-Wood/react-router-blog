import React from 'react';

function FilmDetails({film}) {
    let backdropUrl, posterUrl
    if (film.id !== 'undefined') {
        backdropUrl = `https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`
        posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`
    }

    const  filmInfo = (
        <div className="film-detail is-hydrated">
            <figure className="film-backdrop">
                <img src={backdropUrl} alt="film backdrop"/>
                <h1 className="film-title">{film.title}</h1>
            </figure>

            <div className="film-meta">
                <h2 className="film-tagline">{film.tagline}</h2>
                <p className="film-detail-overview">
                    <img src={posterUrl} className="film-detail-poster" alt={film.title} />
                    {film.overview}
                </p>
            </div>
        </div>
    )

    const emptyInfo = (
        <div className="film-detail">
            <p>
                <i className="material-icons">subscriptions</i>
                <span>No film selected</span>
            </p>
        </div>
    )

    const details = film.id ? filmInfo : emptyInfo
    return (
        <div className="film-details">
            <h1 className="section-title">FILMS</h1>
            {details}
        </div>
    )
}

export default FilmDetails;
