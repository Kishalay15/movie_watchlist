import express from "express";
import {
  addMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from "../controllers/movieController.js";
import validateMovie from "../middlewares/validateMOvie.js";

const router = express.Router();

router.get("/", getAllMovies);
router.post("/add", validateMovie, addMovie);
router.delete("/:id", deleteMovie);
router.put("/:id", validateMovie, updateMovie);

export default router;
