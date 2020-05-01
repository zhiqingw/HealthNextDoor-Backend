const express = require("express");

// create router
const knowledgeRouter = express.Router();

// load/import the findKnowledge controller
const knowledgeController = require("../controllers/knowledgeController.js");

// handle the GET request on root of the findKnowledge path
// i.e. get all Knowledge
knowledgeRouter.get("/", knowledgeController.getAllKnowledge);

// handle the GET request to get a Knowledge by Name
knowledgeRouter.get("/:name", knowledgeController.getKnowledgeByName);

// handle the POST request to add a Knowledge
knowledgeRouter.post("/", knowledgeController.addKnowledge);

// handle the POST request to update a Knowledge
knowledgeRouter.post("/:name", knowledgeController.updateKnowledge);

//handle the DELETE request to delete a volunteer
knowledgeRouter.delete("/:name", knowledgeController.deleteKnowledge);

// export the router
module.exports = knowledgeRouter;