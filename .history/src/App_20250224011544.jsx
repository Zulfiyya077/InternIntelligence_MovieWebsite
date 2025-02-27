import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import styles from './SearchResultsPage.module.css';

const SearchResultsPage = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            const data = await searchMovies(query);
            setMovies(data.results);
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div className={styles.results}>
            <h2>"{query}" üçün nəticələr</h2>
            <div className={styles.movieList}>
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                ) : (
                    <p>Nəticə tapılmadı.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
