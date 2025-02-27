import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    console

    return (
        <div className={styles.movieCard}>
            <img src={imageUrl} alt={movie.title} className={styles.moviePoster} />
            <div className={styles.movieDetails}>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <p className={styles.movieRating}>{movie.vote_average}/10</p>
                {/* Diğer detaylar eklenebilir */}
            </div>
        </div>
    );
};

export default MovieCard;