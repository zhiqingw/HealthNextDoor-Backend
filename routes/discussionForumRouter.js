const express = require("express");

// create router
const discussionForumRouter = express.Router();

// load/import the author controller
const discussionForumController = require("../controllers/discussionForumController.js");

// handle the GET request on root of the author-management path
// i.e. get all authors
discussionForumRouter.get("/", discussionForumController.getAllPost);

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
discussionForumRouter.get("/:id", discussionForumController.getPostByID);

// handle the POST request to add an author
discussionForumRouter.post("/", discussionForumController.addPost);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
discussionForumRouter.post("/:id", discussionForumController.updatePost);


//handle the DELETE request to delete a forum
//discussionForumRouter.delete("/:id", discussionForuController.deleteForum);

// export the router
module.exports = discussionForumRouter;