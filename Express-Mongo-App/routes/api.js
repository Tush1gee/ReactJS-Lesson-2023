const { request, response } = require("express");
const express = require("express");
const food = require("../models/Food.js");
const Router = express.Router();

Router.get("/food", async (request, response) => {
  const result = await food.find({});
  console.log(result);
  response.json({ data: result });
});


Router.post("/food", async (request, response) => {
    const body = request.body;
    const newFood = new food(body);
    const result = await newFood.save();
    console.log(result);
    response.json({
      data: result,
    });
  });
  

  module.exports = Router;
  