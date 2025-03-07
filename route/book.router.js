const express = require("express");
const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require("../controller/book.controller");

const bookRouter = express.Router({ mergeParams: true });

bookRouter.get("/", getAllBooks);
bookRouter.get("/:bookId", getBook);
bookRouter.post("/", createBook);
bookRouter.put("/:bookId", updateBook);
bookRouter.delete("/:bookId", deleteBook);

module.exports = bookRouter;
