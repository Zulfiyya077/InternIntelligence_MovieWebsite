import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`);
    console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};