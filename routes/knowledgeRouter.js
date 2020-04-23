const express = require("express");

// create router
const knowledgeRouter = express.Router();

// load/import the author controller
const knowledgeController = require("../controllers/knowledgeController.js");

// handle the GET request on root of the author-management path
// i.e. get all authors
knowledgeRouter.get("/", knowledgeController.getAllKnowledge);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
knowledgeRouter.get("/:id", knowledgeController.getKnowledgeByID);

// handle the POST request to add an author
knowledgeRouter.post("/", knowledgeController.addKnowledge);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
knowledgeRouter.post("/:id", knowledgeController.updateKnowledge);


//handle the DELETE request to delete a forum
//discussionForumRouter.delete("/:id", discussionForuController.deleteForum);

// export the router
module.exports = knowledgeRouter;