const { request, response } = require("express");
const express = require("express");
const categoryRouter = express.Router();
const Category = require("../models/Category");

categoryRouter.get("/list", async (request, response) => {
  const result = await Category.find({});

  response.status(200).json({
    data: result,
  });
});

categoryRouter.post("/create", async (request, response) => {
  const body = request.body;

  const result = await Category.create(body);

  response.status(200).json({
    data: result,
  });
});

categoryRouter.put("/update", async (request, response) => {
  const body = request.body;

  const result = await Category.updateMany(
    { _id: body[0].id },
    { $set: { name: body[1].name } }
  );

  response.status(200).json({
    data: result,
  });
});

module.exports = categoryRouter;
