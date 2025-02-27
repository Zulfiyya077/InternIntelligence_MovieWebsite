import React, { useState, useEffect } from 'react';
import { getPopularMovie
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data?.results || []);
            } catch (error) {
                console.error("Filmlər yüklənərkən xəta baş verdi:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className={styles.home}>
            <h2>Populyar Filmlər</h2>
            <div className={styles.movieList}>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>Filmlər yüklənir...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
