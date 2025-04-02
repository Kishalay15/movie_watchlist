import { useState } from "react";
import { Pencil, Trash2, CheckCircle, Circle } from "lucide-react";

const MovieCard = ({ movie, deleteMovie, updateMovie }) => {
    const { _id, title, director, genre, rating, watched } = movie;
    const [isWatched, setIsWatched] = useState(watched);

    const toggleWatched = () => {
        const updatedMovie = { ...movie, watched: !isWatched };
        updateMovie(_id, updatedMovie);
        setIsWatched(!isWatched);
    };

    const handleEdit = () => {
        const newTitle = prompt("Enter new title:", title);
        if (newTitle) {
            updateMovie(_id, { ...movie, title: newTitle });
        }
    };

    const handleDelete = () => {
        deleteMovie(_id)
    }

    return (
        <div className="border rounded-lg p-4 shadow-md bg-white flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">Directed by: {director}</p>
            <p className="text-sm text-gray-600">Genre: {genre}</p>
            <p className="text-sm text-gray-600">Rating: {rating}/10</p>

            <div className="flex items-center gap-2 mt-2">
                <button onClick={toggleWatched} className="flex items-center gap-1 text-blue-500">
                    {isWatched ? <CheckCircle size={20} /> : <Circle size={20} />}
                    {isWatched ? "Watched" : "Unwatched"}
                </button>

                <button onClick={handleEdit} className="text-green-500">
                    <Pencil size={20} />
                </button>

                <button onClick={handleDelete} className="text-red-500 ml-auto">
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
