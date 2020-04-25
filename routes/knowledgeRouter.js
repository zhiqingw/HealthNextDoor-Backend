const express = require("express");

// create router
const knowledgeRouter = express.Router();

// load/import the findKnowledge controller
const knowledgeController = require("../controllers/knowledgeController.js");

// handle the GET request on root of the findKnowledge path
// i.e. get all Knowledge
knowledgeRouter.get("/", knowledgeController.getAllKnowledge);

// handle the GET request to get a Knowledge by ID
knowledgeRouter.get("/:id", knowledgeController.getKnowledgeByID);

// handle the POST request to add a Knowledge
knowledgeRouter.post("/", knowledgeController.addKnowledge);

// handle the POST request to update a Knowledge
knowledgeRouter.post("/:id", knowledgeController.updateKnowledge);

// export the router
module.exports = knowledgeRouter;