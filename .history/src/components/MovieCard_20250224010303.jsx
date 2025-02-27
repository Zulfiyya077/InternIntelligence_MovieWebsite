// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
    return (
        <div className={styles.card}>
            <Link to={`/movie/${movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.poster}
                />
                <h3>{movie.title}</h3>
            </Link>
        </div>
    );
};



export default MovieCard;
