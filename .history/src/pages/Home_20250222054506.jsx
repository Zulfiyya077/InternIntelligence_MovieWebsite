import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=batman`
      );
      setMovies(response.data.Search); // OMDB'den dönen filmleri al
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Movies</h1>
      <div className={styles.movieGrid}>
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;

