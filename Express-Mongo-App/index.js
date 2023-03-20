const { request, response } = require("express");

const express = require("express");
const { default: mongoose } = require("mongoose");
const apiRouter = require("./routes/api.js")

const PORT = 8383;

const MONGO_CONNECTION_STRING = "mongodb+srv://Tush1gee2:Rv79oGwVrrTPrC27@cluster0.ifpf7qh.mongodb.net/?retryWrites=true&w=majority" // ene url n uurin mongoDB-deerh connection string

mongoose.connect(MONGO_CONNECTION_STRING) //mongoose holboj bga heseg /////////
    .then(()=> console.log(`Database Амжилттай Холбогдлоо ✔️`))             //
    .catch((err)=> console.error(err));                                     //
                                                                           //
 ///////////////////////////////////////////////////////////////////////////

const app = express();

app.use(express.json());
app.use(apiRouter);

app.get("/", (request, response) => {
    response.send(`<h1>Hello MongoDB From NodeJS</h1>`)
})

app.listen(PORT, () => {
    console.log(`Express Application is running on http://localhost:${PORT}`)
})