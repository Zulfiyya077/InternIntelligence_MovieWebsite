import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For storing potential errors

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await getPopularMovies();
                setMovies(data.results || []); // Handle cases where data.results might be undefined
            } catch (err) {
                console.error("Error fetching movies:", err);
                setError(err); // Set the error state
                setMovies([]); // Or handle it differently
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <div>Loading movies...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Display error message
    }

    if (!movies || movies.length === 0) {
        return <div>No movies found.</div>;
    }

    return (
        <div className={styles.home}>
            <h2>Popüler Filmler</h2>
            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;