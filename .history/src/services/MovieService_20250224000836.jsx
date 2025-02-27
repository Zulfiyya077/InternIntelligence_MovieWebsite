const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Populyar filmləri çəkən funksiya
export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data.results; // Filmlərin siyahısını qaytarır
    } catch (error) {
        console.error("Filmləri yükləyərkən xəta baş verdi:", error);
        return [];
    }
};
