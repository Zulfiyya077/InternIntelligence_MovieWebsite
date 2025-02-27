import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieService'; // API servisi
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = () => {
    const [movies, useState] = ([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await getPopularMovies();
            setMovies(data.results);
        };
        fetchMovies();
    }, []);

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