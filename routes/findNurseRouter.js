const express = require("express");

// create router
const findNurseRouter = express.Router();

// load/import the findNurse controller
const findNurseController = require("../controllers/findNurseController.js");

// handle the GET request on root of the findNurse path
// i.e. get all Nurse
findNurseRouter.get("/", findNurseController.getAllNurse);

// handle the GET request to get a Nurse by Name
findNurseRouter.get("/:name", findNurseController.getNurseByName);

// handle the GET request to get a Nurse by ID
findNurseRouter.get("/:id", findNurseController.getNurseByID);

// handle the POST request to add a Nurse
findNurseRouter.post("/", findNurseController.addNurse);

// handle the POST request to update a Nurse
findNurseRouter.post("/:id", findNurseController.updateNurse);

//handle the DELETE request to delete a post
findNurseRouter.delete("/:id", findNurseController.deleteNurse);

// export the router
module.exports = findNurseRouter;