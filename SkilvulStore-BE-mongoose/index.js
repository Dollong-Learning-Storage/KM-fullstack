const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./config/db");
db.then(() => {
  console.log("Connect Success");
}).catch(() => {
  console.log("Error while connecting");
});

const allRoutes = require("./routes");
app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
