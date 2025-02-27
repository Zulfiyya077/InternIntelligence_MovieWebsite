import React, { useState, useEffect } from 'react';
import { getPopularMovies } from './MovieService';
import MovieCard from './MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getPopularMovies();
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;