import express , {Express, Request, Response} from "express"
import mongoose from "mongoose";
import theaterRouter from "./routes/Theaters.api";
import cors from "cors"
import CommentRouter from "./routes/Comments.api";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGOOSE_CONNECTION_STRING = process.env.MONGOOSE_CONNECTION_STRING || "mongodb://localhost:27017/test"

app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send(name);
});

app.use("/theaters", theaterRouter)
app.use("/comments", CommentRouter)

app.listen(PORT, () => {
  console.log(
    `DAY 91 Express typeScript server is running on ✅ http://localhost:${PORT}`);
    mongoose
    .connect(MONGOOSE_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected  ✅"))
    .catch((err) => console.log(err));
});
