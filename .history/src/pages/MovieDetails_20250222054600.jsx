import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams(); // id parametresi IMDB ID olacak
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`
      );
      setMovie(response.data);
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>No movie found!</p>;

  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{movie.Title}</h1>
      <img
        className={styles.image}
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
        alt={movie.Title}
      />
      <p className={styles.description}>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetails;
