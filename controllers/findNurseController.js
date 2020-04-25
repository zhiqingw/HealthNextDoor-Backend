// import the findNurses model
// i.e. provide the controller a link to the findNurses model
var findNurses = require("../models/findNurse");

// function to handle a request to get all Nurse
const getAllNurse = (req, res) => {
    res.send(findNurses); // return the list of Nurse
};

// function to handle a request to a particular Nurse
const getNurseByID = (req, res) => {
    // search for Nurse in the database via ID
    const findNurse = findNurses.find(findNurse => findNurse.id === req.params.id);

    if (findNurse) {
        // send back the Nurse details
        res.send(findNurse);
    } else {
        res.send([]);
    }
};

// function to handle request to add Nurse
const addNurse = (req, res) => {
    // extract info. from body
    const findNurse = req.body;
    // add Nurse to array
    findNurses.push(findNurse);
    res.send(findNurses);
};

// function to modify Nurse by ID
const updateNurse = (req, res) => {
    const new_nurse = req.body;
    // search for Nurse in the database via ID
    const findNurse = findNurses.find(findNurse => findNurse.id === req.params.id);
    if (!findNurse) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_Nurse into the original Nurse object
    // it is assumed that user input is well-formed
    Object.assign(findNurse, new_nurse);

    // return updated Nurse
    res.send(findNurse);
};

// remember to export the functions
module.exports = {
    getAllNurse,
    getNurseByID,
    addNurse,
    updateNurse
};
