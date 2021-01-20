const express = require('express');


/**
 * Import controllers
 */
const usersController = require('../controllers/users');
const invoicesController = require('../controllers/invoices');
const machinesController = require('../controllers/machines');
const productsController = require('../controllers/products');
const reservationsController = require('../controllers/reservations');
    // const controllers = require('../controllers/controllers'); TDB

/**
 * Define an Express router
 * @type {Router}
 */
const router = express.Router();

/**
 * User routes
 */
router.get('/users', usersController.getAllUser);

/**
 * Session routes
 */
router.get('/user', usersController.getSessionUser);
router.get('/user/:id', usersController.getUserByID);
router.post('/add-user', usersController.postUser);
router.put('/edit-user/:userId', usersController.putEditUser);
//router.get('/user/:userId' , usersController.getUser);
router.post('/auth/:email' , usersController.authUser);
router.get('/logout' , usersController.destroySessionUser);
router.delete('/delete-user/:userId' , usersController.postDeleteUser);
    //router.get('/user/:userId' , usersController.getUser); TBD
    // router.get('/edit-user/:userId' , usersController.getEditUser); TBD

/**
 * Invoice routes
 */
router.get('/invoices' , invoicesController.getAllInvoice);
router.post('/add-invoice' , invoicesController.postInvoice);
router.get('/invoice/:invoiceId' , invoicesController.getInvoice);
    // router.get('/edit-invoice/:invoiceId', invoicesController.getEditInvoice); TDB
    // router.post('/edit-invoice' , invoicesController.postEditInvoice); TDB
    // router.delete('/delete-invoice/:invoiceId', invoicesController.deleteInvoice); TDB

/**
 * Machine routes
 */
router.get('/machines', machinesController.getAllMachines );
router.post('/add-machine' , machinesController.postMachine);
router.get('/machine/:machineId' , machinesController.getMachine);
router.put('/machine/:machineId' , machinesController.postEditMachine);
router.delete('/delete-machine/:machineId', machinesController.deleteMachine);

/**
 * Product routes
 */
router.get('/products', productsController.getAllProduct );
router.post('/add-product' , productsController.postProduct);
router.get('/product/:productId', productsController.getProduct);
router.put('/product/:productId' , productsController.postEditProduct);
router.delete('/delete-product/:productId', productsController.deleteProduct);
    // router.get('/:productId' , productsController.getProduct); TDB

/**
 * Reservation routes
 */
router.get('/reservations' , reservationsController.getAllReservation);
router.post('/reservations', reservationsController.getAllReservation);
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