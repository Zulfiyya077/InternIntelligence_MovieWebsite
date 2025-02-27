import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // .env dosyasından al
const BASE_URL = 'https://api.themoviedb.org/3';

cons
export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`);
        return response;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return { data: { results: [] } };
    }
};