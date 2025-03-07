const { getAuthorService } = require("../services/author.service");
const {
  getAllBooksService,
  getBookService,
  createBookService,
} = require("../services/book.service");

async function getAllBooks(req, res) {
  try {
    const authorId = req.params.authorId;

    if (isNaN(authorId)) {
      return res.status(400).json({ error: "Invalid Author ID" });
    }

    const authors = await getAuthorService(authorId);

    if (authors.length == 0) {
      return res.status(404).json({ error: "Author does not exist" });
    }

    const books = await getAllBooksService(authorId);

    if (books.length == 0) {
      return res.status(404).json({ error: "No Books Available" });
    }

    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to retrieve authors" });
  }
}

async function getBook(req, res) {
  try {
    const authorId = req.params.authorId;
    const bookId = req.params.bookId;

    if (isNaN(authorId)) {
      return res.status(400).json({ error: "Invalid Author ID" });
    }

    if (isNaN(bookId)) {
      return res.status(400).json({ error: "Invalid Book ID" });
    }

    const authors = await getAuthorService(authorId);

    if (authors.length == 0) {
      return res.status(404).json({ error: "Author does not exist" });
    }

    const books = await getBookService(authorId, bookId);

    if (books.length == 0) {
      return res.status(404).json({ error: "Book does not exist" });
    }

    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to retrieve book" });
  }
}

async function createBook(req, res) {
  try {
    const authorId = req.params.authorId;

    if (isNaN(authorId)) {
      return res.status(400).json({ error: "Invalid Author ID" });
    }

    const authors = await getAuthorService(authorId);

    if (authors.length == 0) {
      return res.status(404).json({ error: "Author does not exist" });
    }

    const { title, publishedDate } = req.body;
    if (!title || !publishedDate) {
      return res.status(400).json({ error: "Book info is missing" });
    }

    await createBookService(title, authorId, publishedDate);

    return res.status(201).send("Book created Successfully!");
  } catch (error) {
    console.error("Error inserting Book", err);
    return res.status(500).json({ error: "Failed to create Book" });
  }
}

async function updateBook(req, res) {
  try {
    const authorId = req.params.authorId;
    const bookId = req.params.bookId;

    if (isNaN(authorId)) {
      return res.status(400).json({ error: "Invalid Author ID" });
    }

    if (isNaN(bookId)) {
      return res.status(400).json({ error: "Invalid Book ID" });
    }

    const authors = await getAuthorService(authorId);

    if (authors.length == 0) {
      return res.status(404).json({ error: "Author does not exist" });
    }

    const books = await getBookService(authorId, bookId);

    if (books.length == 0) {
      return res.status(404).json({ error: "Book does not exist" });
    }

    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to retrieve book" });
  }
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
};
