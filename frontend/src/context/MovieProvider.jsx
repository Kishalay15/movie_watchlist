import { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext.jsx";
import { getMovies, addMovie, deleteMovie, updateMovie } from "../utils/api.js";

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getMovies();
                setMovies(response.data.data);
            } catch (error) {
                setError("Fetch Movies Failed: " + error.message);
            }
        };
        fetchMovies();
    }, []);

    const handleAddMovie = async (movie) => {
        try {
            const response = await addMovie(movie);
            setMovies((prev) => [...prev, response.data.data]);
        } catch (error) {
            setError("Add Movie Failed: " + (error.response?.data || error.message));
        }
    };

    const handleUpdateMovie = async (id, updatedMovie) => {
        try {
            const response = await updateMovie(id, updatedMovie);
            setMovies((prev) => prev.map((movie) => (movie._id === id ? response.data.data : movie)));
        } catch (error) {
            setError("Update Movie Failed: " + error.message);
        }
    };

    const handleDeleteMovie = async (id) => {
        try {
            await deleteMovie(id);
            setMovies((prev) => prev.filter((movie) => movie._id !== id));
        } catch (error) {
            setError("Delete Movie Failed: " + error.message);
        }
    };

    return (
        <MovieContext.Provider value={{ movies, addMovie: handleAddMovie, updateMovie: handleUpdateMovie, deleteMovie: handleDeleteMovie, error }}>
            {children}
        </MovieContext.Provider>
    );
};
