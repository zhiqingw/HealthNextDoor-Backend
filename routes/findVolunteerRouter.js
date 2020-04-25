const express = require("express");

// create router
const findVolunteerRouter = express.Router();

// load/import the findVolunteer controller
const findVolunteerController = require("../controllers/findVolunteerController.js");

// handle the GET request on root of the findVolunteer path
// i.e. get all Volunteer
findVolunteerRouter.get("/", findVolunteerController.getAllVolunteer);

// handle the GET request to get a Volunteer by ID
findVolunteerRouter.get("/:id", findVolunteerController.getVolunteerByID);

// handle the POST request to add a Volunteer
findVolunteerRouter.post("/", findVolunteerController.addVolunteer);

// handle the POST request to update a Volunteer
findVolunteerRouter.post("/:id", findVolunteerController.updateVolunteer);

// export the router
module.exports = findVolunteerRouter;