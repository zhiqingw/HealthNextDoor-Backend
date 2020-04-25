const express = require("express");

// create router
const discussionForumRouter = express.Router();

// load/import the discussionForum controller
const discussionForumController = require("../controllers/discussionForumController.js");

// handle the GET request on root of the discussionForum path
// i.e. get all post
discussionForumRouter.get("/", discussionForumController.getAllPost);

// handle the GET request to get a post by ID
discussionForumRouter.get("/:id", discussionForumController.getPostByID);

// handle the POST request to add a post
discussionForumRouter.post("/", discussionForumController.addPost);

// handle the POST request to update a post
discussionForumRouter.post("/:id", discussionForumController.updatePost);


//handle the DELETE request to delete a post
discussionForumRouter.delete("/:id", discussionForumController.deletePost);

// export the router
module.exports = discussionForumRouter;