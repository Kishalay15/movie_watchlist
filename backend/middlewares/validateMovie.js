const validateMovie = (req, res, next) => {
  const { title, director, genre, rating } = req.body;

  if (!title || !director || !genre || rating === undefined) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  if (typeof rating !== "number" || rating < 0 || rating > 10) {
    return res.status(400).json({
      success: false,
      message: "Rating must be a number between 0 and 10",
    });
  }

  next();
};

export default validateMovie;
