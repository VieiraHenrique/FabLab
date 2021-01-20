const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Database Machine schema
 */

// Define schema
const MachineSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    tarif: {
        type: Number,
        required :true
    },
    machine : {
        type : Schema.Types.ObjectId,
        ref : "Reservation"
    },
    available: {
        type: Boolean,
        default: true,
        required: true
    },
    comment: {
        type: String,
        default : " "
    },
    // TBD
    // category: {
    //     type: String,
    //     required:true
    // },
    // machines :[{
    //     type: Schema.Types.ObjectId,
    //     ref : 'Machine'
    // }],
});

// Export schema
module.exports = mongoose.model('Machine', MachineSchema);