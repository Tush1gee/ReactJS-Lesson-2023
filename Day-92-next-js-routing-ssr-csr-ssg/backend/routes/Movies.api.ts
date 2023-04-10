import { Router } from "express";
import { getMovies, getMoviesDetail} from '../controller/movies.controller'

const MovieRouter = Router();

MovieRouter.get("/list", getMovies)
MovieRouter.get("/byId/:id", getMoviesDetail)

export default MovieRouter