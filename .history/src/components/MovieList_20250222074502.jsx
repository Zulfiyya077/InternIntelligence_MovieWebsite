import React from 'react';
import MovieCard from './MovieCard';
StyleSheet

function MovieList({ movies }) {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
