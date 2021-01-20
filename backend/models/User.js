const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Database User schema
 */

// Define schema
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    tel: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    company: {
        type: String,
    },
    reservations: [{
        type : Schema.Types.ObjectId,
        ref : "Reservation"
    }],
    invoice : [{
        type : Schema.Types.ObjectId,
        ref : "Invoice"
    }],
    usertype: {
        type: String,
        default: "user",
        required: true,
    }
});

// Export schema
module.exports = mongoose.model('User', UserSchema);