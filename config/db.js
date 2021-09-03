const mongoose = require('mongoose');
require("dotenv").config();
const dbConnection = process.env.DB_STRING; // Connection string for db

mongoose.connect(dbConnection
, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});