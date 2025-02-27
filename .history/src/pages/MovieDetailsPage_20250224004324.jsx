import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/MovieService';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) return <p className={styles.loading}>Məlumatlar yüklənir...</p>;

    return (
        <div className={styles.details}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className={styles.info}>
                <h2>{movie.title}</h2>
                <p><strong>İl:</strong> {movie.release_date}</p>
                <p><strong>IMDB Reytinqi:</strong> ⭐ {movie.vote_average}</p>
                <p><strong>Mövzu:</strong> {movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
