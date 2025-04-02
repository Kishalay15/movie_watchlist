import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext.jsx";
import { useNavigate } from "react-router-dom";

const MovieForm = () => {
    const { addMovie } = useContext(MovieContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        director: "",
        genre: "",
        rating: 0,
        watched: false
    });

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "rating") {
            value = Math.max(0, Math.min(10, Number(value)));
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addMovie(formData);
        setFormData({ title: "", director: "", genre: "", rating: 0, watched: false });
        navigate("/");
    };


    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-3">
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="director" placeholder="Director" value={formData.director} onChange={handleChange} className="border p-2 rounded" />
            <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} className="border p-2 rounded" />
            <input type="number" name="rating" placeholder="Rating (1-10)" value={formData.rating} onChange={handleChange} className="border p-2 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Movie</button>
        </form>
    );
};

export default MovieForm;
