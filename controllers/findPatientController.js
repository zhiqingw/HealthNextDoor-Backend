// import the findPatient model
// i.e. provide the controller a link to the findPatient model
var findPatients = require("../models/findPatient");

// function to handle a request to get all Patient
const getAllPatient = (req, res) => {
    res.send(findPatients); // return the list of Patient
};

// function to handle a request to a particular Patient
const getPatientByName = (req, res) => {
    // search for Patient in the database via Name
    const findPatient = findPatients.find(findPatient => findPatient.name === req.params.name);

    if (findPatient) {
        // send back the Patient details
        res.send(findPatient);
    } else {
        res.send([]);
    }
};

// function to handle request to add Patient
const addPatient = (req, res) => {
    // extract info. from body
    const findPatient = req.body;
    // add Patient to array
    findPatients.push(findPatient);
    res.send(findPatients);
};

// function to modify Patient by ID
const updatePatient = (req, res) => {
    const new_patient = req.body;
    // search for Patient in the database via ID
    const findPatient = findPatients.find(findPatient => findPatient.id === req.params.id);
    if (!findPatient) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_Patient into the original Patient object
    // it is assumed that user input is well-formed
    Object.assign(findPatient, new_patient);

    // return updated Patient
    res.send(findPatient);
};

const deletePatient = (req, res) => {
    // delete patient in the database via ID
    const parient = findPatients.find(findPatient => findPatient.id === req.params.id);
    const index = findPatients.indexOf(parient);
    findPatients.splice(index, 1);
    res.send(findPatients);
};
module.exports = {
    getAllPatient,
    getPatientByName,
    addPatient,
    updatePatient,
    deletePatient
};
