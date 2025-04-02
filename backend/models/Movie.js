import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  watched: { type: Boolean, default: false },
});

const Movie = mongoose.model("Movie", MovieSchema);
export default Movie;
