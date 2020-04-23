// import the author model
// i.e. provide the controller a link to the author model
var findVolunteers = require("../models/findVolunteer");

// function to handle a request to get all authors
const getAllVolunteer = (req, res) => {
    res.send(findVolunteers); // return the list of authors
};

// function to handle a request to a particular author
const getVolunteerByID = (req, res) => {
    // search for author in the database via ID
    const findVolunteer = findVolunteers.find(findVolunteer => findVolunteer.id === req.params.id);

    if (findVolunteer) {
        // send back the author details
        res.send(findVolunteer);
    } else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add author
const addVolunteer = (req, res) => {
    // extract info. from body
    const findVolunteer = req.body;

    // add author to array
    findVolunteers.push(findVolunteer);
    res.send(findVolunteers);
};

// function to modify author by ID
const updateVolunteer = (req, res) => {
    const new_volunteer = req.body;

    // search for author in the database via ID
    const findVolunteer = findVolunteers.find(findVolunteer => findVolunteer.id === req.params.id);
    if (!findVolunteer) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_author into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(findVolunteer, new_volunteer);

    // return updated author
    res.send(findVolunteer);
};

// remember to export the functions
module.exports = {
    getAllVolunteer,
    getVolunteerByID,
    addVolunteer,
    updateVolunteer
};
