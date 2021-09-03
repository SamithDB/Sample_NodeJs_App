const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = (req, res) => {
    res.render("customer/customer-form", {
        viewTitle: "Insert Customer"
    });
};

exports.addOrEdit = (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
};

exports.getList = (req, res) => {
    Customer.find((err, docs) => {
        if (!err) {
            res.render("customer/home", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving customer list :' + err);
        }
    });
};

exports.getOne = (req, res) => {
    Customer.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("customer/customer-form", {
                viewTitle: "Update Customer",
                customer: doc
            });
        }
    });
};

exports.deleteOne = (req, res) => {
    Customer.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/customer/home');
        }
        else { 
            console.log('Error in Customer delete :' + err);
        }
    });
};

// Validation
function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['nameError'] = err.errors[field].message;
                break;
            case 'address':
                body['addressError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

// Insert Customer Function
function insertRecord(req, res) {
    var customer = new Customer();
    customer.name = req.body.name;
    customer.address = req.body.address;
    customer.age = req.body.age;
    customer.password = req.body.password;
    customer.save((err, doc) => {
        if (!err)
            res.redirect('customer/home');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("customer/customer-form", {
                    viewTitle: "Insert customer",
                    customer: req.body
                });
            }
            else {
                console.log('Error during record insertion : ' + err);
            }
        }
    });
}

// Update Customer Function
function updateRecord(req, res) {
    Customer.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('customer/home'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("customer/customer-form", {
                    viewTitle: 'Update Customer',
                    customer: req.body
                });
            }
            else {
                console.log('Error during record update : ' + err);
            }  
        }
    });
}