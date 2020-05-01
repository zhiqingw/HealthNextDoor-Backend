// import the discussionForum model
// i.e. provide the controller a link to the discussionForum model
var discussionForums = require("../models/discussionForum");

// function to handle a request to get all post
const getAllPost = (req, res) => {
    res.send(discussionForums); // return the list of post
};

// function to handle a request to a particular post
const getPostByName = (req, res) => {
    // search for post in the database via Name
    const discussionForum = discussionForums.find(discussionForum => discussionForum.name === req.params.name);

    if (discussionForum) {
        // send back the post details
        res.send(discussionForum);
    } else {
       res.send([]);
    }
};

// function to handle request to add post
const addPost = (req, res) => {
    // extract info. from body
    const post = req.body;

    // add post to array
    discussionForums.push(post);
    res.send(discussionForums);
};

// function to modify post by Name
const updatePost = (req, res) => {
    const new_post = req.body;

    // search for post in the database via Name
    const post = discussionForums.find(discussionForum => discussionForum.name === req.params.name);
    if (!post) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_post into the original post object
    // it is assumed that user input is well-formed
    Object.assign(post, new_post);

    // return updated post
    res.send(post);
};

const deletePost = (req, res) => {
    // delete post in the database via Name
    const post = discussionForums.find(discussionForum => discussionForum.name === req.params.name);
    const index = discussionForums.indexOf(post);
    discussionForums.splice(index, 1);
    res.send(discussionForums);
};

module.exports = {
    getAllPost,
    getPostByName,
    addPost,
    updatePost,
    deletePost
};
