import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/movies" });

export const getMovies = () => API.get("/");
export const addMovie = (movie) =>
  API.post("/add", movie, {
    headers: { "Content-Type": "application/json" },
  });

export const deleteMovie = (id) => API.delete(`/${id}`);
export const updateMovie = (id, movie) => API.put(`/${id}`, movie);
