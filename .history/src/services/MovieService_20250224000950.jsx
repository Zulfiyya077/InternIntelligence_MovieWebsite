import axios from 'axios';

const API_KEY = 'SENIN_API_ACARIN'; // Buraya öz API açarını yaz
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US'
    }
});

// Populyar filmləri gətirən funksiya
export const getPopularMovies = async () => {
    try {
        const response = await api.get('/movie/popular');
        return response.data;
    } catch (error) {
        console.error('TMDB-dən populyar filmləri gətirərkən xəta baş verdi:', error);
        return { results: [] };
    }
};
