const express = require("express");
const cors = require("cors");
const authorRouter = require("./route/author.router");
const bookRouter = require("./route/book.router");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/authors", authorRouter);
app.use("/authors/:authorId/books", bookRouter);

app.get("*", (req, res) => {
  return res.status(200).send("Welcome to HomePage");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
