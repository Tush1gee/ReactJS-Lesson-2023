const express = require("express");
const cors = require("cors");
const fs = require("fs");

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

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file unshihad aldaa garlaa !",
          data: [],
        });
      }
      const roleData = JSON.parse(readData); // parse ashiglan object bolgoj bga
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userData = {
        ...body,
        role: roleName,
      };

      readDataObj.push(userData); // hooson array hiij chadhar bolson
      //fs write
      fs.writeFile(
        "./data/users.json",
        JSON.stringify(readDataObj),
        (writeError) => {
          if (writeError) {
            response.json({
              status: "Aldaa garlaa !!! JSON file zuruud bn",
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

// API get all user ROLES
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "ymr negen alda garlaa!!!",
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
