const express = require("express");

// create router
const findNurseRouter = express.Router();

// load/import the findNurse controller
const findNurseController = require("../controllers/findNurseController.js");

// handle the GET request on root of the findNurse path
// i.e. get all Nurse
findNurseRouter.get("/", findNurseController.getAllNurse);

// handle the GET request to get a Nurse by ID
findNurseRouter.get("/:id", findNurseController.getNurseByID);

// handle the POST request to add a Nurse
findNurseRouter.post("/", findNurseController.addNurse);

// handle the POST request to update a Nurse
findNurseRouter.post("/:id", findNurseController.updateNurse);

// handle the GET request on root of the author-management path
// i.e. get all authors
findNurseRouter.get("/", findNurseController.getAllNurse);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
findNurseRouter.get("/:id", findNurseController.getNurseByID);

// handle the POST request to add an author
findNurseRouter.post("/", findNurseController.addNurse);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
findNurseRouter.post("/:id", findNurseController.updateNurse);


//handle the DELETE request to delete a post
findNurseRouter.delete("/:id", findNurseController.deleteNurse);

// export the router
module.exports = findNurseRouter;