// src/pages/Home.jsx
import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

const Home = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [hoveredMovie, setHoveredMovie] = useState(null);

    const handleSelect = (movie) => {
        setSelectedMovie(movie);
    };

    const handleHover = (movie) => {
        setHoveredMovie(movie);
    };

    const handleLeave = () => {
        setHoveredMovie(null);
    };

    return (
        <div>
            <h1>Movie List</h1>
            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        isSelected={selectedMovie && selectedMovie.id === movie.id}
                        onSelect={handleSelect}
                        isHovered={hoveredMovie && hoveredMovie.id !== movie.id}
                        onMouseEnter={() => handleHover(movie)}
                        onMouseLeave={handleLeave}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;


export default Home;
