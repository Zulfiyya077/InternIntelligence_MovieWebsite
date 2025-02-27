import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // TMDB API anahtarınızı buraya ekleyin
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`); // Türkçe dil
        return response;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return { data: { results: [] } }; // Boş bir dizi döndür
    }
};

// Diğer API çağrıları buraya eklenebilir (örneğin, film detayları)