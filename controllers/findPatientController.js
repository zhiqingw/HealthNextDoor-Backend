// import the findPatients model
// i.e. provide the controller a link to the findPatients model
const mongoose = require("mongoose");
const Patient = mongoose.model("Patient");
// function to handle a request to get all Nurse

const getAllPatients = async (req, res) => {

    try {
        const all_patient = await Patient.find();
        return res.send(all_patient);
    } catch (err) {
        res.status(400);
        return res.send("Database query failed");
    }
};

// function to handle a request to a particular Nurse
/*const getNurseByName = (req, res) => {
    // search for Nurse in the database via Name
    const findNurse = findPatients.find(findNurse => findNurse.name === req.params.name);

    if (findNurse) {
        // send back the overview of the Nurse
        res.send(findNurse.name + ": " + findNurse.introduction);
    } else {
        res.send("Not Found");
    }
};*/

const getPatientByID = async (req, res) => {
    const patientId = req.params.id;

    try {
        const patients = await Patient.find({id: patientId});
        if (!patients) {
            res.status(400);
            console.log("Author not found");
            return res.send("Author not found");
        }

        const patient = patients[0];
        console.log("Author found!!!", patient);


        return res.send(patient);
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }
};

// function to handle request to add Nurse
const addPatient = async (req, res) => {
    const new_patient = req.body;
    Patient.create(new_patient);
    res.send("done");
};

// function to modify Nurse by ID
const updatePatient = async (req, res) => {
    const patientId = req.params.id;
    const new_patient = req.body;
    try {
        const patients = await Patient.find({id: patientId});
        if (!patients) {
            res.status(400);
            console.log("Author not found");
            return res.send("Author not found");
        }

        const patient = patients[0];
        console.log("Author found!!!", patient);

        patient["first_name"] = new_patient["first_name"];
        patient["last_name"] = new_patient["last_name"];
        patient["gender"] = new_patient["gender"];
        patient["introduction"] = new_patient["introduction"];

        await patient.save();
        res.send(new_patient);
    } catch (err) {
        res.status(400);
        console.log(err);
        return res.send("Database query failed");
    }

};

const deletePatient = (req, res) => {
    // delete post in the database via ID
    const deleted_id = req.params.id;
    Patient.remove({id: deleted_id}, function(err, obj) {
        if (err) throw err;
    });
    return res.send("deleted");
};

// remember to export the functions
module.exports = {
    getAllPatients,
    getPatientByID,
    addPatient,
    updatePatient,
    deletePatient
};
