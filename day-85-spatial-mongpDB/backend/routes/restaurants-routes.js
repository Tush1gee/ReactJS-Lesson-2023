const { Router } = require("express");
const { getRestaurants } = require("../controllers/restaurants-controller");

const route = Router();

route.get("/restaurants", getRestaurants);

module.exports = route;
