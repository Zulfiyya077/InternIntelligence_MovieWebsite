import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/MovieService';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    return (
        <div className={styles.home}>
            <h2>🔥 Populyar Filmlər</h2>
            <div className={styles.movieList}>
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                ) : (
                    <p>Filmlər yüklənir...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
