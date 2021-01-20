const { response } = require('express');
const Machine = require('../models/Machine');


/**
 * Machine controller
 */

// Get a list of all machines
exports.getAllMachines = async (req, res) => {
    try {
        const machines = await Machine.find();
        res.json(machines);
    } catch (error) {
        console.log(error);
    }
}

// Get a machine according to its ID
exports.getMachine = async(req, res) => {
    const machineId = req.params.machineId;
    try {
        const machine = await Machine.findById(machineId , (machine) => machine )
        res.json(machine);
    }catch(error) {
        console.log(error);
    }
}

// Create a new machine
exports.postMachine = async(req, res) => {
    const {name , tarif, available , comment } = req.body;
    try{
        const machine = new Machine({name : name , available : available , tarif : tarif , comment: comment});
        machine.save();
        res.send(200);
    }catch(error){
        console.log(error);
    }
}

// Edit a machine according to its ID
exports.postEditMachine = async(req, res) => {
    const machineId = req.params.machineId;
    const {name , tarif, invoice, available, comment } = req.body;
    Machine.findById(machineId).then((machine) => {
        machine.name = name ;
        machine.tarif = tarif;
        machine.invoice = invoice;
        machine.available = available || true;
        machine.comment = comment;

        return machine.save();
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    });
}

// Delete a machine according to its ID
exports.deleteMachine = async(req, res) => {
    const machineId = req.params.machineId;
    try {
        const machine = await Machine.findByIdAndDelete(machineId , (machine) => machine);
        res.send(200);
    }catch(err) {
        console.log(err);
    }
}