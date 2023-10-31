const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// http://localhost:3000/testing
app.get("/testing", (req, res) => {
  res.json({
    type: "success",
    data: {
      text: "Ini testing",
    },
  });
});

app.get("/blog", (req, res) => {
  res.json({
    type: "success",
    data: [
      {
        id: 1,
        title: "Blog pertama",
      },
    ],
  });
});

const users = [
  { id: 1, name: "yusuf" },
  { id: 2, name: "tio" },
  { id: 3, name: "farid" },
];

app.get("/users", (req, res) => {
  res.json({
    type: "success",
    data: users,
  });
});

app.post("/users", (req, res) => {
  users.push({
    id: req.body.id,
    name: req.body.name,
  });

  res.status(201).json({
    type: "success",
    data: users,
  });
});

app.post("/articles", (req, res) => {
  users.push({
    id: req.body.id,
    name: req.body.name,
  });

  res.status(201).json({
    type: "success",
    data: `
      <h1 class="title-article">ini titile</h1>\n<p></p>
      `,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
