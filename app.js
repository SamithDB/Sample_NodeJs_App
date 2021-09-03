const express = require('express');
const path = require('path');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// Configures the database
require("./config/db");

// Imports all of the routes from ./routes/index.js
app.use(require("./routes"));

// Configures the template engine
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ 
    extname: 'hbs', 
    defaultLayout: 'mainLayout',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

// Start server in port 3000
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});