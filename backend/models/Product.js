const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Database Product schema
 */

// Define schema
const ProductSchema = new Schema({
    name : {
        type: String,
        required: true 
    },
    category : {
        type: String,
        required: true
    },
    tarif : {
        type: Number,
        required: true
    },
    stock : {
        type: Number,
        required: true
    },
    invoice : [{
        type : Schema.Types.ObjectId,
        ref : "Invoice"
    }]
});

// Export schema
module.exports = mongoose.model('Product', ProductSchema);