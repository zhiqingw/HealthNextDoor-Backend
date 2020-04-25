const express = require("express");

// create router
const findNurseRouter = express.Router();

// load/import the author controller
const findNurseController = require("../controllers/findNurseController.js");

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


//handle the DELETE request to delete a forum
//discussionForumRouter.delete("/:id", discussionForuController.deleteForum);

// export the router
module.exports = findNurseRouter;