import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import { getPopularMovies } from './services/movieService';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getPopularMovies();
        setMovies(movieData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div>Filmler yükleniyor...</div>
      ) : error ? (
        <div>Hata: {error}</div>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;