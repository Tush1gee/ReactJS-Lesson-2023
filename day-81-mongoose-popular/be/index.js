console.log("Day 81 - Insert Many/ Update Many Delete Many");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const { request } = require("http");
const Todo = require("./models/Todo");

const app = express();
const PORT = 8088;

const MONGO_CONNECTION_STRING =
  "mongodb+srv://Tush1gee2:xQ0fG9idxoFgXyCZ@cluster0.ifpf7qh.mongodb.net/test";

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("<h1>Day 81 - Insert Many/ Update Many Delete Many");
});

app.post("/create", async (request, response) => {
  const body = request.body;
  const result = await Todo.insertMany(body);

  response.status(200).json({
    data: result,
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log(`Database Амжилттай Холбогдлоо ✅`))
    .catch((err) => console.error(err));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
