const Reservation = require('../models/Reservation');


/**
 * Reservation controller
 */

// Get a list of all reservations
exports.getAllReservation = async(req, res) => {
    try {
        let reservations = [];
        (req.body) 
            ? reservations = await Reservation.find(req.body.match).populate('machine')
            : reservations = await Reservation.find().populate('machine');
        res.json(reservations);
    }catch(error){
        console.log(error);
    }
}

// Get a reservation according to its ID
exports.getReservation = async(req, res) => {
    const reservationId = req.params.reservationId;
    try{
        const reservation = await Reservation.findById(reservationId, (reservation) => reservation);
        res.json(reservation);
    }catch(error){
        console.log(error);
    }
}

// Create a new reservation
exports.postReservation = async(req, res) => {
    const { usernotlogged , userlogged , startdate , enddate, machine , comment} = req.body;
    try{
        const reservation = new Reservation({ usernotlogged:usernotlogged , userlogged:userlogged , startdate:startdate , enddate:enddate, machine: machine , comment:comment});
        reservation.save();
        res.sendStatus(200);
    }catch(error) {
        console.log(error);
    }
}

// Edit a reservation according to its ID
exports.getEditReservation = async(req, res) => {
    // TBD
}

exports.postEditReservation = async(req, res) => {
    const reservationId = req.body.reservationId;
    const {name,usernotlogged,userlogged,startdate,enddate} = req.body;

    Reservation.findById(reservationId).then((reservation) => {
        reservation.name = name;
        reservation.usernotlogged = usernotlogged;
        reservation.userlogged = userlogged;
        reservation.startdate = startdate;
        reservation.enddate = enddate;

        return reservation.save()
    }).then(() =>{
        console.log('Reservation Updated');
    }).catch((error) =>{
        console.log(error);
    });
}

// Delete a reservation according to its ID
exports.deleteReservation = async(req, res) => {
    const reservationId = req.body.reservationId;

    try {
        const reservation = await Reservation.findByIdAndDelete(reservationId, (reservation) => reservation);
        console.log(reservation + 'This reservation has been deleted');
    }catch(error) {
        console.log(error);
    }
}