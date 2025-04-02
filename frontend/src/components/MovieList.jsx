import { useContext } from "react"
import { MovieContext } from "../context/MovieContext.jsx"
import MovieCard from "./MovieCard.jsx"

const MovieList = () => {
    const { movies, updateMovie, deleteMovie } = useContext(MovieContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} updateMovie={updateMovie} />
                ))
            ) : (
                <p className="text-center text-gray-500">No movies in your watchlist yet.</p>
            )}
        </div>
    )
}

export default MovieList
