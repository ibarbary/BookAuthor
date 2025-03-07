const express = require("express");
const { getAllBooks, getBook, createBook } = require("../controller/book.controller");

const bookRouter = express.Router({ mergeParams: true });

bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBook);
bookRouter.post("/", createBook);
bookRouter.put("/:bookId");
bookRouter.delete("/:bookId");

module.exports = bookRouter;
