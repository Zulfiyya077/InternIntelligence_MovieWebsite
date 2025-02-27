import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // .env dosyasından alınacak


export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=347d82ea465848c0e545ed15f4366554&language=tr-TR`);
    console.log(BASE_URL);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};