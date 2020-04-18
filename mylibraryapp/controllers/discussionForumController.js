// import the author model
// i.e. provide the controller a link to the author model
var discussionForums = require("../models/discussionForum");

// function to handle a request to get all authors
const getAllForum = (req, res) => {
    res.send(discussionForums); // return the list of authors
};

// function to handle a request to a particular author
const getForumByID = (req, res) => {
    // search for author in the database via ID
    const discussionForum = discussionForums.find(discussionForum => discussionForum.id === req.params.id);

    if (discussionForum) {
        // send back the author details
        res.send(discussionForum);
    } else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add author
const addDiscussionForum = (req, res) => {
    // extract info. from body
    const discussionForum = req.body;

    // add author to array
    discussionForums.push(discussionForum);
    res.send(discussionForums);
};

// function to modify author by ID
const updateDiscussionForum = (req, res) => {
    const new_discussionForum = req.body;

    // search for author in the database via ID
    const discussionForum = discussionForums.find(discussionForum => discussionForum.id === req.params.id);
    if (!discussionForum) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_author into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(discussionForum, new_discussionForum);

    // return updated author
    res.send(discussionForum);
};

// remember to export the functions
module.exports = {
    getAllForum,
    getForumByID,
    addDiscussionForum,
    updateDiscussionForum
};
