// import the findCaregivers model
// i.e. provide the controller a link to the findCaregivers model
const mongoose = require("mongoose");
const Caregiver = mongoose.model("caregiver");
// function to handle a request to get all Nurse

const getAllCaregivers = async (req, res) => {

    try {
        const all_caregiver = await Caregiver.find();
        return res.send(all_caregiver);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

// function to handle a request to a particular Nurse
/*const getNurseByName = (req, res) => {
    // search for Nurse in the database via Name
    const findNurse = findCaregivers.find(findNurse => findNurse.name === req.params.name);

    if (findNurse) {
        // send back the overview of the Nurse
        res.send(findNurse.name + ": " + findNurse.introduction);
    } else {
        res.send("Not Found");
    }
};*/

const getCaregiverByID = async (req, res) => {
    const caregiverId = req.params.id;

    try {
        const caregivers = await Caregiver.find({id: caregiverId});
        if (!caregivers) {
            res.status(400);
            console.log("Author not found");
            return res.send("Author not found");
        }

        const caregiver = caregivers[0];
        console.log("Author found!!!", caregiver);


        return res.send(caregiver);
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

// function to handle request to add Nurse
const addCaregiver = async (req, res) => {
    const new_caregiver = req.body;
    Caregiver.create(new_caregiver);
    res.send("done");
};

// function to modify Nurse by ID
const updateCaregiver = async (req, res) => {
    const caregiverId = req.params.id;
    const new_caregiver = req.body;
    try {
        const caregivers = await Caregiver.find({id: caregiverId});
        if (!caregivers) {
            res.status(400);
            console.log("Author not found");
            return res.send("Author not found");
        }

        const caregiver = caregivers[0];
        console.log("Author found!!!", caregiver);

        caregiver["first_name"] = new_caregiver["first_name"];
        caregiver["last_name"] = new_caregiver["last_name"];
        caregiver["gender"] = new_caregiver["gender"];
        caregiver["introduction"] = new_caregiver["introduction"];

        await caregiver.save();
        res.send(new_caregiver);
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }

};

const deleteCaregiver = (req, res) => {
    // delete post in the database via ID
    const deleted_id = req.params.id;
    Caregiver.remove({id: deleted_id}, function(err, obj) {
        if (err) throw err;
    });
    return res.send("deleted");
};

// remember to export the functions
module.exports = {
    getAllCaregivers,
    getCaregiverByID,
    addCaregiver,
    updateCaregiver,
    deleteCaregiver
};