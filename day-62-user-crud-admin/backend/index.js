const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { request } = require("http");
const { response } = require("express");

const app = express();
PORT = 8080;

app.use(cors());
app.use(express.json());

//API user REGISTER
app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  //fs read
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        users: [],
      });
    }

    const readDataObj = JSON.parse(readData);
    console.log(readDataObj);
    readDataObj.push(body); // hooson array hiij chadhar bolson

    //fs write
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(readDataObj),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
          });
        }
        response.json({
          status: "Amjilttai",
          data: readDataObj,
        });
      }
    );
  });
});

// API duudhad buh hereglegch haruulah heseg
app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }

    response.json({
      status: "Amjilttai",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
