// import the author model
// i.e. provide the controller a link to the author model
var authors = require("../models/author");

// function to handle a request to get all authors
const getAllAuthors = (req, res) => {
  res.send(authors); // return the list of authors
};

// function to handle a request to a particular author
const getAuthorByID = (req, res) => {
  // search for author in the database via ID
  const author = authors.find(author => author.id === req.params.id);

  if (author) {
    // send back the author details
    res.send(author);
  } else {
    // you can decide what to return if author is not found
    // currently, an empty list will be returned
    res.send([]);
  }
};

// function to handle request to add author
const addAuthor = (req, res) => {
  // extract info. from body
  const author = req.body;

  // add author to array
  authors.push(author);
  res.send(authors);
};

// function to modify author by ID
const updateAuthor = (req, res) => {
  const new_author = req.body;

  // search for author in the database via ID
  const author = authors.find(author => author.id === req.params.id);
  if (!author) {
	  // cannot be found
	  return res.send([]);
  }

  // now merge new_author into the original author object
  // it is assumed that user input is well-formed (a dangerous assumption)
  Object.assign(author, new_author);

  // return updated author
  res.send(author);
};

// remember to export the functions
module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor
};
