import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  
  // fetchMovies fonksiyonu
  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: import.meta.env.VITE_OMDB_API_KEY,  // API anahtarınızı burada kullanıyoruz
          s: 'inception', // film arama sorgusu (burada örnek olarak 'inception' kullanıyoruz)
        },
      });
      setMovies(response.data.Search);  // Gelen filmleri state'e ekliyoruz
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };

  // sayfa yüklendiğinde filmleri çekmek için useEffect
  useEffect(() => {
    fetchMovies();  // API'den filmleri al
  }, []); // boş array, sadece bir kez çalışmasını sağlar

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Movies</h1>
      <div className={styles.movieGrid}>
        {movies.length === 0 ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
