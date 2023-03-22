const { request, response } = require("express");
const express = require("express");
const api_Router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");

api_Router.get("/", (request, response) => {
  response.status(200).json({
    data: [],
  });
});

api_Router.post("/protected", auth, (request, response, next) => {
  response.status(200).json({
    data: "Successfully got the protect route ✅",
  });
});

api_Router.post("/unprotected", (request, response) => {
  response.status(200).json({
    data: "Successfully got the protect route ✅",
  });
});

module.exports = api_Router;
