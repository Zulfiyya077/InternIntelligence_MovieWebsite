// src/pages/MovieDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { id } = useParams();  // URL-dən film ID-si alırıq
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${YOUR_API_KEY}&language=en-US`
                );
                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.movieDetails}>
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
            />
            <p>{movie.overview}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetailsPage;
