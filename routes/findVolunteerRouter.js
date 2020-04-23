const express = require("express");

// create router
const findVolunteerRouter = express.Router();

// load/import the author controller
const findVolunteerController = require("../controllers/findVolunteerController.js");

// handle the GET request on root of the author-management path
// i.e. get all authors
findVolunteerRouter.get("/", findVolunteerController.getAllVolunteer);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
findVolunteerRouter.get("/:id", findVolunteerController.getVolunteerByID);

// handle the POST request to add an author
findVolunteerRouter.post("/", findVolunteerController.addVolunteer);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
findVolunteerRouter.post("/:id", findVolunteerController.updateVolunteer);


//handle the DELETE request to delete a forum
//discussionForumRouter.delete("/:id", discussionForuController.deleteForum);

// export the router
module.exports = findVolunteerRouter;