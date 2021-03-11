const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
const userRouter = require("./routes/user-router.js");

const app = express();
const apiPort = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("I'm alive");
});

app.use("/api/users", userRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
