const pool = require("../../Books/db/connection");
const queryList = require("../db/queries");

async function getAllBooksService(authorId) {
  try {
    const query = queryList.GET_ALL_BOOKS;
    const values = [authorId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getBookService(authorId, bookId) {
  try {
    const query = queryList.GET_BOOK;
    const values = [authorId, bookId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function createBookService(title, authorId, publishedDate) {
  try {
    const query = queryList.CREATE_BOOK;
    const values = [title, authorId, publishedDate];
    await pool.query(query, values);
  } catch (error) {
    throw error;
  }
}

async function updateBookService(title, publishedDate, authorId, bookId) {
  try {
    const query = queryList.UPDATE_BOOK;
    const values = [title, publishedDate, authorId, bookId];
    const result = await pool.query(query, values);
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteBookService(authorId, bookId) {
  try {
    const query = queryList.DELETE_BOOK;
    const values = [authorId, bookId];
    const result = await pool.query(query, values);
    return result;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getAllBooksService,
  getBookService,
  createBookService,
  updateBookService,
  deleteBookService
};
