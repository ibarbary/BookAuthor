const {
  getAllAuthorsService,
  getAuthorService,
  createAuthorService,
  updateAuthorService,
  deleteAuthorService,
} = require("../services/author.service");

async function getAllAuthors(req, res) {
  try {
    const authors = await getAllAuthorsService();

    if (authors.length == 0) {
      return res.status(404).json({ error: "No Authors Available" });
    }

    return res.status(200).json(authors);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to retrieve authors" });
  }
}

async function getAuthor(req, res) {
  try {
    const authorId = req.params.id;

    if (isNaN(authorId)) {
      return res.status(400).json({ error: "Invalid Author ID" });
    }

    const authors = await getAuthorService(authorId);

    if (authors.length == 0) {
      return res.status(404).json({ error: "Author does not exist" });
    }

    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve author" });
  }
}

async function createAuthor(req, res) {
  try {
    const { name, birthdate } = req.body;
    if (!name || !birthdate) {
      return res.status(400).json({ error: "Author info is missing" });
    }

    await createAuthorService(name, birthdate);

    return res.status(201).send("Author created Successfully!");
  } catch (error) {
    console.error("Error inserting Author", err);
    return res.status(500).json({ error: "Failed to create Author" });
  }
}

async function updateAuthor(req, res) {
  try {
    const authorId = req.params.id;
    if (isNaN(authorId)) {
      return res.status(400).json({ error: "Invalid Author ID" });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Body is empty" });
    }

    const { name, birthdate } = req.body;

    const result = await updateAuthorService(name, birthdate, authorId);

    if (result.rowCount == 0) {
      return res.status(404).json({ error: "Author does not exist" });
    }

    return res.status(200).send("Author Updated Successfully!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to update author" });
  }
}

async function deleteAuthor(req, res) {
  try {
    const authorId = req.params.id;
    if (isNaN(authorId)) {
      return res.status(400).json({ error: "Invalid Author ID" });
    }

    const result = await deleteAuthorService(authorId);

    if (result.rowCount == 0) {
      return res.status(404).json({ error: "Author does not exist" });
    }

    return res.status(200).send("Author Deleted Successfully!");
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete author" });
  }
}

module.exports = {
    getAllAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}