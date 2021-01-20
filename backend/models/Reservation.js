const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Database Reservation schema
 */

// Define schema
const ReservationSchema = new Schema({
    usernotlogged: {
        type: String,
        required: () => {
            return !this.userlogged;
        }
    },
    archive: {
        type: Boolean,
        default: false,
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required:true
    },
    machine : {
        type: Schema.Types.ObjectId,
        ref: 'Machine',
        required: true,
    },
    comment : {
        type : String,
        default : ''
    },
    invoice : {
        type : Schema.Types.ObjectId,
        ref : "Invoice"
    }
    // TBD
    // userlogged: {
    //     type: Schema.Types.ObjectId,
    //     ref : "User",
    //     required: () => {
    //         return !this.usernotlogged;
    //     }
    // },
});

// Export schema
module.exports = mongoose.model('Reservation', ReservationSchema);