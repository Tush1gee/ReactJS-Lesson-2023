const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

//API user REGISTER
app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);

  //fs read from users json
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

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
          });
        }

        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "generating has error",
              data: [],
            });
          }

          console.log("Hashed Data: ", hashData);

          const newUser = {
            firstName: body.firstname,
            lastName: body.lastname,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };
          readDataObj.push(newUser); // hooson array hiij chadhar bolson

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
  });
});

// API user login >>>>>>>>>
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        // hervee file unshihad amjiltgui bolwol
        status: "file not found",
        data: [],
      });
    }

    const usersArrayObject = JSON.parse(readData);
    console.log(usersArrayObject);
    const foundUser = usersArrayObject.filter(
      (user) => body.email === user.email
    );

    // herwee hereglegch users.json baihgui oldohgui bol hereglec oldsongui gj butsaana
    if (foundUser.length === 0) {
      response.json({
        status: "User Not Found",
        data: [],
      });
    } else {
      // herwee hereglegch oldson bol
      const foundUserObj = foundUser[0];
      console.log("FoundUser", foundUserObj);

      if (foundUserObj.password === body.password) {
        response.json({
          status: "Хэрэглэгчийн нэр эсвэл нууц үг буруу байна",
        });
      } else {
        response.json({
          status: "Амжилттай!",
          data: {
            email: foundUser.email,
            firstName: foundUserObj.firstName,
            lastName: foundUserObj.lastName,
          },
        });
      }
    }
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
