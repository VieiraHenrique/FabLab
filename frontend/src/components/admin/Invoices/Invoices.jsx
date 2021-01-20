import React, { useEffect, useState } from 'react';
import api from '../../../api';
import { FormField } from '../../commons';
import './invoice.css';


/**
 * This component is used to manage reservations list
 * and invoices list. It adds management for these like
 * transforming reservation into invoice
 * @param props
 * @returns {JSX.Element}
 */
export function Invoices(props) {

    // Variables
    const [error, setError] = useState();
    const [invoices, setInvoices] = useState([]);
    const [reservations, setReservations] = useState([]);

    // Get all reservations
    async function getAllReservations() {
        await api.getAll(`/reservations`)
        .then((data) => {
            setReservations(data.data);     
        },
        (error) => {
            setError(error);
        })
    }

    // Get all Invoices
    async function getAllInvoices() {
        await api.getAll(`/invoices`)
        .then((data) => {
            setInvoices(data.data);
        },
        (error) => {
            setError(error);
        })
    }

    // Display formatted dates in invoice & reservations
    function displayDate(dateInJson){
        let date = new Date(dateInJson);
        return date.getDate() + "/" + (date.getMonth() + 1);
    }

    function displayHours(dateInJSON){
        let date = new Date(dateInJSON);
        return date.getHours() + "h" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    }

    // use Effect for refresh state
    useEffect( () => {
        getAllReservations();
        getAllInvoices();
    }, []);

    // Method for transform Reservation to Invoice
    async function transformToInvoice(reservationId, machineId){
        let txt;
        txt = window.confirm(`Voulez vous transformer cette résérvation en facture ?`);
        if(txt){
            const machineSelected = await api.getById('/machine', machineId);
            await api.insertNew('/add-invoice', {
                reservation:reservationId,
                machineUseInInvoice:machineSelected.data.name
            });
            window.location.reload(false);
        }
    }

    // Render invoices and reservations lists
    return (
        <>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <section className={"white-container"}>
                    <h2>Factures</h2>
                    <table className="table text-center">
                        <thead className="banner-list">
                        <tr>
                            <th>Nom</th>
                            <th>Machine</th>
                            <th>Date</th>
                            <th>Horaires</th>
                        </tr>
                        </thead>
                        <tbody>
                        {invoices.map(invoice => (
                            <tr key={"invoice-" + invoice._id}>
                                {(invoice.reservation) && <>
                                    <td>{invoice.reservation.usernotlogged}</td>
                                    <td>{invoice.machineUseInInvoice}</td>
                                    <td>{displayDate(invoice.reservation.startdate)}</td>
                                    <td>{displayHours(invoice.reservation.startdate)} à {displayHours(invoice.reservation.enddate)}</td>
                                </>}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </section>
            <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
                <section className={"white-container"}>
                    <h2>Réservations</h2>
                    <table className="table text-center">
                        <thead className="banner-list">
                        <tr>
                            <th>Nom</th>
                            {/* <th>Machine</th> */}
                            <th>Date</th>
                            <th>Horaires</th>
                            <th>Facturer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reservations.map(reservation => (
                            <tr key={"reservation-" + reservation._id}>
                                <td>{reservation.usernotlogged}</td>
                                {/* <td>{reservation.machine.name}</td> */}
                                <td>{displayDate(reservation.startdate)}</td>
                                <td>{displayHours(reservation.startdate)} à {displayHours(reservation.enddate)}</td>
                                <td>
                                    <FormField type="button" callback={() => transformToInvoice(reservation._id, reservation.machine._id)}>
                                        <i className="fas fa-plus add-icon"></i>
                                    </FormField>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    );
}