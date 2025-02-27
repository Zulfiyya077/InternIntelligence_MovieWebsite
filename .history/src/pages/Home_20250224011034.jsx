// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/MovieService';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);  // Seçilen film
    const [hoveredMovie, setHoveredMovie] = useState(null);  // Hovered film

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    const handleSelect = (movie) => {
        setSelectedMovie(movie);  // Filme tıklanarsa onu seçiyoruz
    };

    const handleHover = (movie) => {
        setHoveredMovie(movie);  // Filme hover edildikçe o filmi set ediyoruz
    };

    const handleLeave = () => {
        setHoveredMovie(null);  // Hover bittiğinde film null oluyor
    };

    return (
        <div className={styles.home}>
            <h2>🔥 Populyar Filmlər</h2>
            <div className={styles.movieList}>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            isSelected={selectedMovie && selectedMovie.id === movie.id}  // Seçilen film
                            onSelect={handleSelect}
                            isHovered={hoveredMovie && hoveredMovie.id !== movie.id}  // Hovered film değilse blur uygula
                            onMouseEnter={() => handleHover(movie)}  // Hover başladığında
                            onMouseLeave={handleLeave}  // Hover bittiğinde
                        />
                    ))
                ) : (
                    <p>Filmlər yüklənir...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
