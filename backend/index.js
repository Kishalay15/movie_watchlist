import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler);

app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
