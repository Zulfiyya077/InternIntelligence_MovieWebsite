import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;  // .env faylından API açarını alırıq
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (searchQuery) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
