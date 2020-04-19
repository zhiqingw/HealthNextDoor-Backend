const express = require("express");

// create router
const findPatientRouter = express.Router();

// load/import the author controller
const findPatientController = require("../controllers/findPatientController.js");

// handle the GET request on root of the author-management path
// i.e. get all authors
findPatientRouter.get("/", findPatientController.getAllPatient);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
findPatientRouter.get("/:id", findPatientController.getPatientByID);

// handle the POST request to add an author
findPatientRouter.post("/", findPatientController.addPatient);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
findPatientRouter.post("/:id", findPatientController.updatePatient);


//handle the DELETE request to delete a forum
//discussionForumRouter.delete("/:id", discussionForuController.deleteForum);

// export the router
module.exports = findPatientRouter;