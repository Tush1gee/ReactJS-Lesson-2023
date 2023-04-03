import { Router } from "express";
import { getTheaters, getTheaterById, getSearchByZipcode, getSearchByState, getSearchByStreet, getSearchByCityName } from '../controller/theater.controller'

const theaterRouter = Router();

theaterRouter.get("/list", getTheaters)

theaterRouter.get("/byId/:id", getTheaterById)


theaterRouter.get("searchByStreet", getSearchByStreet)
theaterRouter.get("searchByCityName", getSearchByCityName)
theaterRouter.get("searchByZipcode", getSearchByZipcode)
theaterRouter.get("searchByState", getSearchByState)

export default theaterRouter