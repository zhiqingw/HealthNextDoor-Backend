const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv/config');
require("./models");
const cors = require('cors');

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json

app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>HealthNextDoor</H1>");
});


const discussionForumRouter = require("./routes/discussionForumRouter");
const findCaregiverRouter = require("./routes/findCaregiverRouter");
const findPatientRouter = require("./routes/findPatientRouter");
const knowledgeRouter = require("./routes/knowledgeRouter");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");
const userRouter = require("./routes/userRouter");
const uploadRouter = require("./routes/uploadRouter");
app.use("/upload", uploadRouter);
app.use("/discussionForum", discussionForumRouter);
app.use("/findCaregiver", findCaregiverRouter);
app.use("/findPatient", findPatientRouter);
app.use("/knowledge", knowledgeRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/user", userRouter);
// start app and listen for incoming requests on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!");
});

module.exports = app;