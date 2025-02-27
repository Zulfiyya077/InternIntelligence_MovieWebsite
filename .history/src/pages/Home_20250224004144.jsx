// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US'
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className={styles.home}>
            <h1>Popular Movies</h1>
            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;
