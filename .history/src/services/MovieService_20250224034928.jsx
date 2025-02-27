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


export const getPopularMovies = async () => {
    try {
        const response = await api.get('/movie/popular');
        return response.data;
    } catch (error) {
        console.error('Populyar filmlər yüklənərkən xəta baş verdi:', error);
        return { results: [] };
    }
};




export const getMovieDetails = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Film detalları yüklənərkən xəta baş verdi:', error);
        return null;
    }
};

export const searchMovies = async (query, filter) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=API_KEY&page=1&sort_by=${filter}.desc`
    );
    const data = await response.json();
    return data;
};
