const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Database Invoice schema
 */

// Define schema
const InvoiceSchema = new Schema({
    reservation : {
        type: Schema.Types.ObjectId,
        ref: 'Reservation',
        required: true,        
    },
    machineUseInInvoice : {
        type: String,
        required: true,
    },
    // TBD
    // user : {
    //     type : Schema.Types.ObjectId,
    //     ref : "User",
    // },
});

// Export schema
module.exports = mongoose.model('Invoice', InvoiceSchema);