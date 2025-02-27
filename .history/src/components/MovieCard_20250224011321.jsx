// src/components/MovieCard.jsx
import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie, isSelected, onSelect, isHovered }) => {
    return (
        <div
            className={`${styles.movie-card} ${isHovered ? styles.blur : ''} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(movie)}  // Filme tıkladığında onu seçiyoruz
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
        </div>
    );
};

export default MovieCard;
