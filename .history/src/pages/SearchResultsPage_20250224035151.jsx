import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../services/MovieService';
import MovieCard from '../components/MovieCard';
import styles from './SearchResultsPage.module.css';

const SearchResultsPage = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('popular');  // Filtr parametri əlavə edirik

    // Axtarış nəticələrini və filter parametri ilə yeni məlumatları alırıq
    useEffect(() => {
        const fetchSearchResults = async () => {
            const data = await searchMovies(query, filter); // filter parametrini də göndəririk
            setMovies(data.results);
        };

        fetchSearchResults();
    }, [query, filter]); // query və filter dəyişdiyi zaman fetchSearchResults çağrılacaq

    return (
        <div className={styles.results}>
            <h2>"{query}" üçün nəticələr</h2>

            {/* Filtrləmə seçimi */}
            <div className={styles.filterContainer}>
                <label htmlFor="filter">Filtrə et:</label>
                <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className={styles.filterSelect}
                >
                    <option value="popular">Ən Populyar</option>
                    <option value="top_rated">Ən Yüksək Qiymətləndirilən</option>
                    <option value="now_playing">İndiki Oynayan</option>
                </select>
            </div>

            <div className={styles.movieList}>
                {movies.lengthtry {
                     
                } catch (error) {
                    
                }> 0 ? (
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                ) : (
                    <p>Nəticə tapılmadı.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
