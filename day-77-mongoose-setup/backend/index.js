console.log("--- DAY 77 MONGOOSE SETUP ---");
const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api.js");

const PORT = 8989;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Tush1gee2:I4uqKIqXxHmtwtPx@cluster0.ifpf7qh.mongodb.net/?retryWrites=true&w=majority"; // ene ih heregten bnshv

const app = express();

app.use(express.json());
app.use(apiRouter);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("Database амжилттай холбогдсон 🟢"))
  .catch((error) => console.error(error));

app.get("/", (request, response) => {
  response.send(`<h1>Day 77 = Mongoose Application Setup</h1>`);
});

app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
