const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const restautantApi = require("./routes/restaurants-routes");

const app = express();
const PORT = process.env.PORT;
const MONGOOSE_CONNECTIO_STRING = process.env.MONGOOSE_CONNECTIO_STRING;

app.use(cors());
app.use(express.json());

app.use("/restaurant", restautantApi);

app.get("/", (request, response) => {
  response.send("<h1>DAY 85 Spatial </h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGOOSE_CONNECTIO_STRING)
    .then(() => console.log("Database Амжилттай Холбогдлоо ✅"))
    .catch((error) => console.error(error));
  console.log(`Application is running on ✅ http://localhost:${PORT}`);
});
