import mongoose from "mongoose";
import Movie from "../models/Movie.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    return res.status(200).json({
      success: true,
      count: movies.length,
      data: movies,
    });
  } catch (error) {
    console.error("Get all Movies Error:", error);
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: "Server Error. Please try again later.",
    });
  }
};

export const addMovie = async (req, res) => {
  try {
    const { title, director, genre, rating } = req.body;
    const movie = new Movie({
      title,
      director,
      genre,
      rating,
    });

    const savedMovie = await movie.save();

    res.status(201).json({
      success: true,
      message: "Movie added successfully",
      data: savedMovie,
    });
  } catch (error) {
    console.error("Add Movie Error:", error);
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: "Server Error. Please try again later.",
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
      data: movie,
    });
  } catch (error) {
    console.error("Delete Movie Error:", error);
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: "Server Error. Please try again later.",
    });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Movie ID format",
      });
    }

    const { title, director, genre, rating, watched } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        director,
        genre,
        rating,
        watched,
      },
      { new: true, runValidators: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie Updated successfully",
      data: updatedMovie,
    });
  } catch (error) {
    console.error("Update Movie Error:", error);
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: "Server Error. Please try again later.",
    });
  }
};
