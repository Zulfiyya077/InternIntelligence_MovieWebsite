import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '.';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{movie.title}</h1>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p className={styles.description}>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
