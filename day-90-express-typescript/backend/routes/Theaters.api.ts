import { Router } from "express";
import { getTheaters, getTheaterById, searchByZipCode, searchByKey, searchByStreet, searchByCity } from '../controller/theater.controller'

const theaterRouter = Router();

theaterRouter.get("/list", getTheaters)

theaterRouter.get("/byId/:id", getTheaterById)


theaterRouter.get("searchByStreet", searchByStreet)
theaterRouter.get("searchByCityName", searchByCity )
theaterRouter.get("searchByZipcode", searchByZipCode)
theaterRouter.get("searchByKey", searchByKey)

export default theaterRouter