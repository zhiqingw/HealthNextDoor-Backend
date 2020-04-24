const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>HealthNextDoor</H1>");
});

// handle author-management related requests
// first import the author router
const discussionForumRouter = require("./routes/discussionForumRouter");
const findNurseRouter = require("./routes/findNurseRouter");
const findPatientRouter = require("./routes/findPatientRouter");
const findVolunteerRouter = require("./routes/findVolunteerRouter");
const knowledgeRouter = require("./routes/knowledgeRouter");
// the author routes are added onto the end of '/author-management'
app.use("/discussionForum", discussionForumRouter);
app.use("/findNurse", findNurseRouter);
app.use("/findPatient", findPatientRouter);
app.use("/findVolunteer", findVolunteerRouter);
app.use("/knowledge", knowledgeRouter);
// start app and listen for incoming requests on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!");
});