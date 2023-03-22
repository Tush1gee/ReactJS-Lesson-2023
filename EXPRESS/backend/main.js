const express = require("express");
const cors = require("cors");
const fs = require("fs")
const { request, response } = require("express");

const PORT = 8086
const app = express()
app.use(cors())
app.use(express()) // express application daa JSOn data huleej avch bolno gdgin zaaj ugch bga

app.get("/", (request, response) => {
    response.send("Hello Express Server") // CRUD -> READ
})

app.post("/user", (request, response)=> { // CRUD -> CREATE
    const body = request.body;
    console.log(body)
    fs.readFile("./data/user.json", "utf-8", (readError, data) => {
        let savedData = JSON.parse(data);
        if(readError) {
            response.json({
                status: "read file error",
            });
        }

        const newUser = {
            id: Date.now().toString(),
            username: body.username,
            age: body.age,
            }

        savedData.push(newUser);

        fs.writeFile(
            "./data/user.json", 
            JSON.stringify(savedData),
            (writeError) => {
                if(writeError) {
                    response.json({
                        status: "error",
                    });
                } else {
                    response.json({
                        status: "success",
                        data: savedData
                    }) 
                }
            }
        )
    })
})

app.put("/", (request, respone)=> {
    response.send() // CRUD -> UPDATE
})

app.delete("/", (request, response) => {
    response.send() // CRUD -> DELETE
})

app.listen(PORT, () => {
    console.log(`Server is Running On http://localhost:${PORT}`)
})  