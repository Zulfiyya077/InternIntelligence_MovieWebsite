import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css';

function MovieCard({ movie }) {
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.image}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <Link to={`/movie/${movie.id}`} className={styles.link}>
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;
