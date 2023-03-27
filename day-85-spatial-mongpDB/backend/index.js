const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const restaurantApi = require("./routes/restaurants-routes");
const neighborhoodApi = require("./routes/neighborhoods-routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGOOSE_CONNECTION_STRING = process.env.MONGOOSE_CONNECTION_STRING;

app.use(express.json());
app.use(cors());

app.use("/restaurant", restaurantApi);
app.use("/neighborhood", neighborhoodApi);

app.get("/", (request, response) => {
  response.status(200).send(`<h1 style="text-align: center;>Day-85</h1>`);
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGOOSE_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected"))
    .catch((error) => console.error(error));
  console.log(`Application is running on http://localhost:${PORT}`);
});
