import { Router } from "express";
import { getMovies} from '../controller/movies.controller'

const MovieRouter = Router();

MovieRouter.get("/list", getMovies)

export default MovieRouter