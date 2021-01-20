"use strict";

var express = require('express');

/**
 * Import controllers
 */
var controllers = require('../controllers/controllers');
var usersController = require('../controllers/users');
var invoicesController = require('../controllers/invoices');
var machinesController = require('../controllers/machines');
var productsController = require('../controllers/products');
var reservationsController = require('../controllers/reservations');

/**
 * Define an Express router
 * @type {Router}
 */
var router = express.Router();

/**
 * User routes
 */
router.get('/users', usersController.getAllUser);

/**
 * Session routes
 */
router.get('/user', usersController.getSessionUser);
router.post('/add-user', usersController.postUser); //router.get('/user/:userId' , usersController.getUser);
router.post('/auth/:email', usersController.authUser); // router.get('/edit-user/:userId' , usersController.getEditUser);
router.post('/edit-user', usersController.postEditUser);
router["delete"]('/delete-user/:userId', usersController.postDeleteUser);

/**
 * Invoice routes
 */
router.get('/invoices', invoicesController.getAllInvoice); // router.post('/add-invoice' , invoicesController.postInvoice);
    // router.get('/:invoiceId' , invoicesController.getInvoice); TDB
    // router.get('/edit-invoice/:invoiceId', invoicesController.getEditInvoice); TDB
    // router.post('/edit-invoice' , invoicesController.postEditInvoice); TDB
    // router.delete('/delete-invoice/:invoiceId', invoicesController.deleteInvoice); TDB

/**
 * Machine routes
 */
router.get('/machines', machinesController.getAllMachines);
router.post('/add-machine', machinesController.postMachine);
router.get('/machine/:machineId', machinesController.getMachine); // router.get('/edit-machine/:machineId', machinesController.getEditMachine);
    // router.post('/edit-machine' , machinesController.postEditMachine); TDB
    // router.delete('/delete-machine/:machineId', machinesController.deleteMachine); TDB

/**
 * Product routes
 */
router.post('/add-product', productsController.postProduct); // router.get('/:productId' , productsController.getProduct);
    // router.get('/edit-product/:productId', productsController.getEditMachine); TDB
    // router.post('/edit-product' , productsController.postEditProduct); TDB
    // router.delete('/delete-product/:productId', productsController.deleteProduct); TDB
    // router.get('/products', productsController.getAllProduct ); TDB

/**
 * Reservation routes
 */
router.get('/reservations' , reservationsController.getReservation);
router.post('/add-reservation' , reservationsController.postReservation);
    // router.get('/:reservationId' , reservationsController.getReservation); TDB
    // router.get('/edit-reservation/:reservationId' , reservationsController.getEditReservation); TDB
    // router.post('/edit-reservation' , reservationsController.postEditReservation); TDB
    // router.delete('/delete-reservation/:reservationId' , reservationsController.deleteReservation); TDB

/**
 * Export all routes through router
 * @type {Router}
 */
module.exports = router;