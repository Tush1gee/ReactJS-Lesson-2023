import { Router } from "express";
import { getTopMovies} from '../controller/topMovies.controller'

const TopMovieRouter = Router();

TopMovieRouter.get("/toplist", getTopMovies)

export default TopMovieRouter