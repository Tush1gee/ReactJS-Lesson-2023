console.log("day-56 REST API");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Express REST API is running</h1>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);
    console.log(timerData);
    console.log(typeof timerData);

    response.json({
      status: "Амжилттай ✅",
      data: timerData,
    });
  });
});

// ======================= DELETE AREA =======================>
app.delete("/timers", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file reader error",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);
    const filteredObject = readObject.filter((o) => o.id !== body.timerId);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during write file",
            data: [],
          });
        }
        response.json({
          status: "Амжилттай ✅",
          data: filteredObject,
        });
      }
    );
  });
});

app.put("./data/data.json", (request, response) => {
  if (readError) {
    response.json({
      status: "file read error",
      data: [],
    });
  }
  const savedData = JSON.parse(readData);
  const changedData = savedData.map((d) => {
    if (d.id === request.body.id) {
      (d.title = request.body.title), (d.project = request.body.project);
    }
    return d;
  });
  fs.writeFile(
    "./data/data.json",
    JSON.stringify(changedData),
    (writeError) => {
      if (writeError) {
        response.json({
          status: "file write error",
          data: [],
        });
        response.json({
          status: "Амжилттай",
          data: changedData,
        });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
