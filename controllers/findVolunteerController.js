// import the findVolunteer model
// i.e. provide the controller a link to the findVolunteer model
var findVolunteers = require("../models/findVolunteer");

// function to handle a request to get all Volunteer
const getAllVolunteer = (req, res) => {
    res.send(findVolunteers); // return the list of Volunteer
};

// function to handle a request to a particular Volunteer
const getVolunteerByName = (req, res) => {
    // search for Volunteer in the database via Name
    const findVolunteer = findVolunteers.find(findVolunteer => findVolunteer.name === req.params.name);

    if (findVolunteer) {
        // send back the Volunteer details
        res.send(findVolunteer);
    } else {
        res.send([]);
    }
};

// function to handle request to add Volunteer
const addVolunteer = (req, res) => {
    // extract info. from body
    const findVolunteer = req.body;

    // add Volunteer to array
    findVolunteers.push(findVolunteer);
    res.send(findVolunteers);
};

// function to modify Volunteer by ID
const updateVolunteer = (req, res) => {
    const new_volunteer = req.body;

    // search for Volunteer in the database via ID
    const findVolunteer = findVolunteers.find(findVolunteer => findVolunteer.id === req.params.id);
    if (!findVolunteer) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_volunteer into the original author object
    // it is assumed that user input is well-formed
    Object.assign(findVolunteer, new_volunteer);

    // return updated Volunteer
    res.send(findVolunteer);
};

const deleteVolunteer = (req, res) => {
    // delete volunteer in the database via ID which will be easier than via name
    const volunteer = findVolunteers.find(findVolunteer => findVolunteer.id === req.params.id);
    const index = findVolunteers.indexOf(volunteer);
    findVolunteers.splice(index, 1);
    res.send(findVolunteers);
};

// remember to export the functions
module.exports = {
    getAllVolunteer,
    getVolunteerByName,
    addVolunteer,
    updateVolunteer,
    deleteVolunteer
};
