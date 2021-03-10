const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
const userRouter = require("./routes/user-router.js");

const app = express();
const apiPort = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api");

app.post("/", (req, res) => {
  console.log(req.body.username);
  res.send("send");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
