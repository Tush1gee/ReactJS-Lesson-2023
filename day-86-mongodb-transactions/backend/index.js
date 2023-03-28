const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const addressApi = require("./routes/transaction-route");
const productApi = require("./routes/product-route");
const transactionApi = require("./routes/transaction-route");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGOOSE_CONNECTION_STRING = process.env.MONGOOSE_CONNECTION_STRING;

app.use(express.json());
app.use(cors());

app.use("/shipping", addressApi);
app.use("/product", productApi);
app.use("/transaction", transactionApi);

app.get("/", (req, res) => {
  res.send("<h1>Day 86 MongoDB Transaction </h1> ");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGOOSE_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected"))
    .catch(() => console.error(error));
  console.log(`Day 86 - AUTHORIZE on http://localhost:${PORT}`);
});
