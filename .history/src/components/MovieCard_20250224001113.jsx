import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; // TMDB image URL

    return (
        <div className={styles.movieCard}>
            <img src={imageBaseUrl + movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    );
};

export default MovieCard;
