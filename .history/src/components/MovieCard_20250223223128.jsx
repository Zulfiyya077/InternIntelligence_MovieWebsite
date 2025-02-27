import React from 'react';

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div>
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.vote_average}/10</p>
    </div>
  );
};