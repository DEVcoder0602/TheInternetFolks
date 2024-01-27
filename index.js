const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send("<h1> Hello from Priyansh Sharma</h1>");
});
