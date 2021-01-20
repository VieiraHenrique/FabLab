const Invoice = require('../models/Invoice');


/**
 * Invoice controller
 */

// Get list of all invoices
exports.getAllInvoice = async(req, res) => {
    try{
        let allInvoice = await Invoice.find().populate('reservation');
        res.json(allInvoice);
    }catch(error){
        console.log(error);
    }
}

// Get an invoice according to its ID
exports.getInvoice = async(req, res) => {
    const invoiceId = req.params.invoiceId;
    try{
        const invoice = await Invoice.findById(invoiceId , (invoice) => invoice);
        res.json(invoice);
    }catch(error){
        console.log(error);
    }
}

// Create a new invoice
exports.postInvoice = async(req, res) => {
    try{
        console.log(req.body)
        const invoice = new Invoice(req.body);
        invoice.save();
        console.log(invoice);
        res.sendStatus(200);
    }catch(error){
        console.log(error);
    }

}

// Delete an invoice according to its ID
exports.deleteInvoice = async(req, res) => {
    const invoiceId = req.body.invoiceId;
    try{
        await Invoice.findByIdAndDelete(invoiceId, (invoice) => invoice);
        console.log('Invoice deleted');
    }catch(error){
        console.log(error)
    }
}

// Edit an invoice according to its ID
exports.getEditInvoice = (req, res) => {
    // TBD
}
exports.postEditInvoice = (req, res) => {
    // TBD
}


