import axios from 'axios';

const API_KEY = '347d82ea465848c0e545ed15f4366554'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    },
});

// Populyar filmləri gətirən funksiya
export const getPopularMovies = async () => {
    try {
        const response = await api.get('/movie/popular');
        return response.data;
    } catch (error) {
        console.error('Populyar filmlər yüklənərkən xəta baş verdi:', error);
        return { results: [] };
    }
};

// Axtarış funksiyası
export const searchMovies = async (query) => {
    try {
        const response = await api.get('/search/movie', {
            params: { query },
        });
        return response.data;
    } catch (error) {
        console.error('Film axtarışı zamanı xəta baş verdi:', error);
        return { results: [] };
    }
};

// Film detallarını gətirən funksiya
export const getMovieDetails = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Film detalları yüklənərkən xəta baş verdi:', error);
        return null;
    }
};
