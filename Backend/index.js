const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");

const createTables = require("./SQLUtilities/createTables");
const createConstraints = require("./SQLUtilities/constraints");

createTables();
createConstraints();


dotenv.config({ path: "config.env" });

const hosteliteRoutes = require("./Routes/hosteliteRoutes");
const loginRoutes = require("./Routes/loginRoutes");
const branchRoutes = require("./Routes/branchRoutes");
const admissionRoutes = require("./Routes/admissionRoutes");
const adminRoutes = require("./Routes/adminRoutes");


app.use(express.json());
app.use(cors());
app.use("/api/hostelite", hosteliteRoutes); 
app.use("/api/login", loginRoutes); 
app.use("/api/branch", branchRoutes); 
app.use("/api/admission", admissionRoutes); 
app.use("/api/admin", adminRoutes); 


// const connection = require('./Connections/connect.js');

app.listen(process.env.PORT, () => {
    console.log("Listening on: http://localhost:" + process.env.PORT);
});
