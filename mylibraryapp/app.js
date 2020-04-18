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
const authorRouter = require("./routes/authorRouter");

// the author routes are added onto the end of '/author-management'
app.use("/discussionForum", authorRouter);

// start app and listen for incoming requests on port 3000
app.listen(3000, () => {
  console.log("The library app is listening on port 3000!");
});
