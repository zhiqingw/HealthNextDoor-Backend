require('dotenv').config()

const mongoose = require("mongoose");

// Connect to MongoDB
//CONNECTION_STRING = "mongodb+srv://<username>:<password>@cluster0-nxqvq.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = "mongodb+srv://ElliotXue:aaa@cluster0-nxqvq.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL.replace("aaa", process.env.MONGO_URL)
console.log(MONGO_URL);



mongoose.connect(MONGO_URL || "mongodb://localhost/info30005", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "HealthNextDoor"
});

const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});

db.once("open", async () => {
    console.log("here!!!!!!!!!!!!");
    console.log("Mongo connection started on " + db.host + ":" + db.port);
});

require("./caregiver");
require("./Patient");
require("./user");