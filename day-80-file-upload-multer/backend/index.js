const express = require("express");
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const PORT = 8083;
const app = express();
const upload = multer({ storage: storage });
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("<h1> Hello Day-80 File upload Multer </h1>");
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  console.log(request.file);

  response.json({
    data: [],
  });
});

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
});
