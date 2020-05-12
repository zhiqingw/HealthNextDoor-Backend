const express = require("express");

// create router
const findPatientRouter = express.Router();

// load/import the findPatient controller
const findPatientController = require("../controllers/findPatientController.js");

// handle the GET request on root of the findPatient path
// i.e. get all Patient
findPatientRouter.get("/", findPatientController.getAllPatients);

// handle the GET request to get a Patient by Name
// note that :name refers to a param, accessed by req.params.name in controller fn
//findPatientRouter.get("/:name", findPatientController.getPatientByName);

// handle the GET request to get a Patient by ID
findPatientRouter.get("/:id", findPatientController.getPatientByID);

// handle the POST request to add a Patient
findPatientRouter.post("/", findPatientController.addPatient);

// handle the POST request to update a Patient
findPatientRouter.post("/:id", findPatientController.updatePatient);

//handle the DELETE request to delete a patient
findPatientRouter.delete("/:id", findPatientController.deletePatient);

// export the router
module.exports = findPatientRouter;