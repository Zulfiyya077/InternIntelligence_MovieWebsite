import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getSearchResults } from '../services/MovieService';
import MovieCard from '../components/MovieCard';
import styles from './SearchResultsPage.module.css';

const SearchResultsPage = () => {
    const { query } = useParams();  // URL-dəki query parametrini əldə edirik
    const location = useLocation(); // URL-dəki parametrləri əldə etmək üçün istifadə edilir

    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('popular');  // Filtrləmə parametri (populyar, yüksək qiymət)

    // Axtarış nəticələrini gətiririk
    useEffect(() => {
        const fetchSearchResults = async () => {
            const data = await getSearchResults(query, filter);  // Axtarış sorğusunu və filtri API-yə göndəririk
            setMovies(data.results);
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query, filter]); // filter dəyişikliyi də izlənəcək

    return (
        <div className={styles.searchResults}>
            <h2>Axtarış Nəticələri: "{query}"</h2>
            
            {/* Filtrləmə seçimi */}
            <div className={styles.filters}>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="popular">Ən Populyar</option>
                    <option value="top_rated">Ən Yüksək Qiymətləndirilən</option>
                    <option value="now_playing">İndiki Zamanlarda Oynayan</option>
                </select>
            </div>

            <div className={styles.movieList}>
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                ) : (
                    <p>Axtarışa uyğun film tapılmadı...</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
