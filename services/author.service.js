const pool = require("../../Books/db/connection");
const queryList = require("../db/queries");

async function getAllAuthorsService() {
  try {
    const query = queryList.GET_ALL_AUTHORS;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getAuthorService(authorId) {
  try {
    const query = queryList.GET_AUTHOR;
    const values = [authorId];
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function createAuthorService(name, birthdate) {
  try {
    const query = queryList.CREATE_AUTHOR;
    const values = [name, birthdate];

    await pool.query(query, values);
  } catch (error) {
    throw error;
  }
}

async function updateAuthorService(name, birthdate, authorId) {
  try {
    const query = queryList.UPDATE_AUTHOR;
    const values = [name, birthdate, authorId];
    const result = await pool.query(query, values);
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteAuthorService(authorId) {
  try {
    const query = queryList.DELETE_AUTHOR;
    const values = [authorId];
    const result = await pool.query(query, values);
    return result;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getAllAuthorsService,
  getAuthorService,
  createAuthorService,
  updateAuthorService,
  deleteAuthorService
};
