console.log("DAY 82 AUTORIZE-WITH-JWT");

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const admin_api_Router = require("./routes/Adming-api");
const api_Router = require("./routes/Api");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGOOSE_CONNECTIO_STRING = process.env.MONGOOSE_CONNECTIO_STRING;

app.use(cors());
app.use(express.json());
app.use(api_Router); // --> import http file der send request darhad data gaa gargaj irne
app.use(admin_api_Router); // --> import

app.get("/", (request, response) => {
  response.send("<h1>DAY 82 AUTORIZE-WITH-JWT</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGOOSE_CONNECTIO_STRING)
    .then(() => console.log("Database Амжилттай Холбогдлоо ✅"))
    .catch((error) => console.error(error));
  console.log(`Application is running on ✅ http://localhost:${PORT}`);
});
