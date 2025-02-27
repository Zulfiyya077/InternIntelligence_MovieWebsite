import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  if (!API_KEY) {
    console.error("API Anahtarı Eksik! .env dosyanızı ve Vite yapılandırmanızı kontrol edin.");
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=tr-TR`;
console.log("API URL:", url);
    return { data: { results: [] }, error: "API Anahtarı Eksik" };
  }

  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Popüler filmler alınırken hata:", error);
    return { data: { results: [] }, error: error.message };
  }
};