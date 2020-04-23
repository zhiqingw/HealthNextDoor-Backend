// import the author model
// i.e. provide the controller a link to the author model
var knowledges = require("../models/knowledge");

// function to handle a request to get all authors
const getAllKnowledge = (req, res) => {
    res.send(knowledges); // return the list of authors
};

// function to handle a request to a particular author
const getKnowledgeByID = (req, res) => {
    // search for author in the database via ID
    const knowledge = knowledges.find(knowledge => knowledge.id === req.params.id);

    if (knowledge) {
        // send back the author details
        res.send(knowledge);
    } else {
        // you can decide what to return if author is not found
        // currently, an empty list will be returned
        res.send([]);
    }
};

// function to handle request to add author
const addKnowledge = (req, res) => {
    // extract info. from body
    const knowledge = req.body;

    // add author to array
    knowledges.push(knowledge);
    res.send(knowledges);
};

// function to modify author by ID
const updateKnowledge = (req, res) => {
    const new_knowledge = req.body;

    // search for author in the database via ID
    const knowledge = knowledges.find(knowledge => knowledge.id === req.params.id);
    if (!knowledge) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_author into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(knowledge, new_knowledge);

    // return updated author
    res.send(knowledge);
};

// remember to export the functions
module.exports = {
    getAllKnowledge,
    getKnowledgeByID,
    addKnowledge,
    updateKnowledge
};
