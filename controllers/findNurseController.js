// import the author model
// i.e. provide the controller a link to the author model
var findNurses = require("../models/findNurse");

// function to handle a request to get all authors
const getAllNurse = (req, res) => {
    res.send(findNurses); // return the list of authors
};

// function to handle a request to a particular author
const getNurseByID = (req, res) => {
    // search for author in the database via ID
    const findNurse = findNurses.find(findNurse => findNurse.id === req.params.id);

    if (findNurse) {
        // send back the author details
        res.send(findNurse);
    } else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add author
const addNurse = (req, res) => {
    // extract info. from body
    const findNurse = req.body;

    // add author to array
    findNurses.push(findNurse);
    res.send(findNurses);
};

// function to modify author by ID
const updateNurse = (req, res) => {
    const new_nurse = req.body;

    // search for author in the database via ID
    const findNurse = findNurses.find(findNurse => findNurse.id === req.params.id);
    if (!findNurse) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_author into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(findNurse, new_nurse);

    // return updated author
    res.send(findNurse);
};

// remember to export the functions
module.exports = {
    getAllNurse,
    getNurseByID,
    addNurse,
    updateNurse
};
