
import express , {Express, Request, Response} from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const MONGOOSE_CONNECTION_STRING = process.env.MONGOOSE_CONNECTION_STRING || "mongodb://localhost:27017/test"

let name: string = "Boldo";
name = "<h1>DAY 90 EXPRESS TYPESCRIPT </h1>"
let phoneNumber: number = 99119911;
let isMarriad: boolean = false;
let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3"];
let sheep: string[] = ["sheep1", "sheep2", "sheep3"]

let sheepObject: {name: string; age: number} = {
  name: "Sheep1",
  age: 1
};
sheepObject.name = "Sheep777"
sheepObject.age= 721



// INTERFACE --------->
interface Student  {
  name: string,
  age: number,
  isVerified: boolean
}

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send(name);
});


app.listen(PORT, () => {
  console.log(
    `DAY 90 Express typeScript server is running on ✅ http://localhost:${PORT}`);
    mongoose
    .connect(MONGOOSE_CONNECTION_STRING)
    .then(() => console.log("Database successfully connected  ✅"))
    .catch((err) => console.log(err));
});
