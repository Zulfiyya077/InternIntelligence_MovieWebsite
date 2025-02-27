import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';

import styles from '../styles/Home.';
import MovieList from '../components/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      fetchMovies(query).then(setMovies);
    }
  }, [query]);

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Movie App</h1>
      <SearchBar setQuery={setQuery} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
