const { response } = require('express');
const Product = require('../models/Product');


/**
 * Product controller
 */

// Get a list of all products
exports.getAllProduct = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}

// Get a product according to its ID
exports.getProduct = async(req, res) => {
    const productId = req.params.productId;
    try {
        const product = await Product.findById(productId, (product) => product);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

// Create a new product
exports.postProduct = async(req, res) => {
    const { name , category , tarif , stock } = req.body;
    try {
        const product = new Product({name : name , category : category , tarif : tarif , stock : stock});
        product.save();
        res.send(200);
    }catch(error){
        console.log(error);
    }
}

// Edit a product according to its ID
exports.postEditProduct = async(req, res) => {   
    const productId = req.params.productId;
    const {name, category, tarif, stock, invoice} = req.body;
    Product.findById(productId).then((product) => {
        product.name = name;
        product.category = category;
        product.tarif = tarif;
        product.stock = stock;
        product.invoice = invoice;

        return product.save();
    })
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
    })
}

// Delete a machine according to its ID
exports.deleteProduct = async(req, res) => {
    const productId = req.params.productId;
    try {
        const product = await Product.findByIdAndDelete(productId , (product) => product);
        res.send(200);
    }catch(error){
        console.log(error);
    }
}