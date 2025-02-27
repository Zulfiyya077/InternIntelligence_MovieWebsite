import axios from 'axios';

const getPopularMovies = async () => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    console.log("API Key inside function:", API_KEY); // Log inside the function

    if (!API_KEY) {
        console.error("API Key is undefined! Check your .env file and Vite config.");
        return { data: { results: [] }, error: "API Key Missing" }; // Return an error indicator
    }

    const BASE_URL = 'https://api.themoviedb.org/3';

    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`);
        return response;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return { data: { results: [] }, error: error.message }; // Return the error message
    }
};

export { getPopularMovies };