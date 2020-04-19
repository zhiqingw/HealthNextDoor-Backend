// import the author model
// i.e. provide the controller a link to the author model
var findPatients = require("../models/findPatient");

// function to handle a request to get all authors
const getAllPatient = (req, res) => {
    res.send(findPatients); // return the list of authors
};

// function to handle a request to a particular author
const getPatientByID = (req, res) => {
    // search for author in the database via ID
    const findPatient = findPatients.find(findPatient => findPatient.id === req.params.id);

    if (findPatient) {
        // send back the author details
        res.send(findPatient);
    } else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add author
const addPatient = (req, res) => {
    // extract info. from body
    const findPatient = req.body;

    // add author to array
    findPatients.push(findPatient);
    res.send(findPatients);
};

// function to modify author by ID
const updatePatient = (req, res) => {
    const new_discussionForum = req.body;

    // search for author in the database via ID
    const findPatient = findPatients.find(findPatient => findPatient.id === req.params.id);
    if (!findPatient) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_author into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(findPatient, new_discussionForum);

    // return updated author
    res.send(findPatient);
};

// remember to export the functions
module.exports = {
    getAllPatient,
    getPatientByID,
    addPatient,
    updatePatient
};
