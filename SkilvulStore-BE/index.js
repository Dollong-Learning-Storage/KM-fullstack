const express = require("express");
const app = express();
const port = 3000;

const db = require("./models");
const { User } = db;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    type: "success",
    name: "Hello World",
  });
});

app.post("/register", async (req, res) => {
  const userInput = req.body;

  try {
    await User.create(userInput);

    res.status(201).json({
      type: "success",
      name: "Success add user",
    });
  } catch (error) {
    res.status(500).json({
      type: "failed",
      name: "Internal server error",
    });
    console.log(error, "erorr nih");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
