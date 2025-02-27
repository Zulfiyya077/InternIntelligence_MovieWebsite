import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Movies</h1>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
