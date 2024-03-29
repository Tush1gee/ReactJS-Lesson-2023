import express , {Express, Request, Response} from "express"
import mongoose from "mongoose";
import theaterRouter from "./routes/Theaters.api";
import cors from "cors"
import CommentRouter from "./routes/Comments.api";
import MoviesRouter from "./routes/Movies.api";
import TopMovieRouter from "./routes/TopMovies.api";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGOOSE_CONNECTION_STRING = process.env.MONGOOSE_CONNECTION_STRING || "mongodb://localhost:27017/test"

app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

// app.use("/theaters", theaterRouter)
// app.use("/comments", CommentRouter)
app.use("/movies", MoviesRouter)
app.use("/movies", TopMovieRouter)

app.listen(PORT, () => {
  console.log(
    `DAY 92 Express typeScript server is running on ✅ http://localhost:${PORT}`);
    mongoose
    .connect(MONGOOSE_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected  ✅"))
    .catch((err) => console.log(err));
});
