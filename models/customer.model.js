const mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    address: {
        type: String
    },
    age: {
        type: Number
    },
    password: {
        type: String
    }
});

mongoose.model('Customer', customerSchema);