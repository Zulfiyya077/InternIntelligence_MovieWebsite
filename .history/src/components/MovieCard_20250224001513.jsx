import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // TMDB-dən şəkilləri götürmək üçün URL

    return (
        <div className={styles.card}>
            <Link to={`/movie/${movie.id}`}>
                <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
            </Link>
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
        </div>
    );
};

export default MovieCard;
