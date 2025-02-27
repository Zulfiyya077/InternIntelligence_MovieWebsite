import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // .env dosyasından alınacak


export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=tr-TR`);
    console.log(BASE_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};