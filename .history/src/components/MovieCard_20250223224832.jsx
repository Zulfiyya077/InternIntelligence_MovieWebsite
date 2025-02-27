import React from 'react';

const MovieCard = ({ movie }) => {
 

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.vote_average}/10</p>
    </div>
  );
};

export default MovieCard;