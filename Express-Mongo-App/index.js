const { request, response } = require("express");

const express = require("express");
const { default: mongoose } = require("mongoose");

const PORT = 8383;

const MONGO_CONNECTION_STRING = "mongodb+srv://Tush1gee2:Rv79oGwVrrTPrC27@cluster0.ifpf7qh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(MONGO_CONNECTION_STRING)
    .then(()=> console.log(`Database Амжилттай Холбогдлоо ✔️`))
    .catch((err)=> console.error(err));


const app = express()

app.get("/", (request, response) => {
    response.send(`<h1>Hello MongoDB From NodeJS</h1>`)
})

app.listen(PORT, () => {
    console.log(`Express Application is running on http://localhost:${PORT}`)
})