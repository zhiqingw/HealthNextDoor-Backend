// import the Knowledge model
// i.e. provide the controller a link to the Knowledge model
var knowledges = require("../models/knowledge");

// function to handle a request to get all Knowledge
const getAllKnowledge = (req, res) => {
    res.send(knowledges); // return the list of Knowledge
};

// function to handle a request to a particular Knowledge
const getKnowledgeByName = (req, res) => {
    // search for Knowledge in the database via Name
    const knowledge = knowledges.find(knowledge => knowledge.name === req.params.name);

    if (knowledge) {
        // send back the Knowledge details
        res.send(knowledge);
    } else {
        res.send([]);
    }
};

// function to handle request to add Knowledge
const addKnowledge = (req, res) => {
    // extract info. from body
    const knowledge = req.body;

    // add Knowledge to array
    knowledges.push(knowledge);
    res.send(knowledges);
};

// function to modify Knowledge by Name
const updateKnowledge = (req, res) => {
    const new_knowledge = req.body;

    // search for Knowledge in the database via Name
    const knowledge = knowledges.find(knowledge => knowledge.name === req.params.name);
    if (!knowledge) {
        // cannot be found
        return res.send([]);
    }

    // now merge new_Knowledge into the original author object
    // it is assumed that user input is well-formed (a dangerous assumption)
    Object.assign(knowledge, new_knowledge);

    // return updated Knowledge
    res.send(knowledge);
};

const deleteKnowledge = (req, res) => {
    // delete knowledge in the database via Name
    const knowledge = knowledges.find(knowledge => knowledge.name === req.params.name);
    const index = knowledges.indexOf(knowledge);
    knowledges.splice(index, 1);
    res.send(knowledges);
};

// remember to export the functions
module.exports = {
    getAllKnowledge,
    getKnowledgeByName,
    addKnowledge,
    updateKnowledge,
    deleteKnowledge
};
