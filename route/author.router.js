const express = require("express");
const { getAllAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor } = require("../controller/author.controller");

const authorRouter = express.Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthor);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

module.exports = authorRouter;
