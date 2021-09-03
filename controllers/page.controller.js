const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

//Get Help Page
exports.getHelp = (req, res) => {
    res.render("pages/help", {
        viewTitle: "Help Page"
    });
};

//Get About Page
exports.getAbout = (req, res) => {
    res.render("pages/about", {
        viewTitle: "About Page"
    });
};