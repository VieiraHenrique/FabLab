import React, { useState, useEffect } from 'react';
import api from '../../../api';

/**
 * TBD - This component is not
 * actually used
 * @returns {JSX.Element}
 */
export function InvoiceForm(props){

    // Variables
    const [reservations, setReservations] = useState([]);
        // const [user, setUser] = useState([]); TBD
        // const [products, setProducts] = useState([]); TBD

    // Get all reservations
    async function getAllReservations(){
        await api.getAll('/reservations')
        .then((data) =>{
            setReservations(data.data);
        }, (error) => {
            console.log(error);
        });
    }

    useEffect( () => {
        getAllReservations();
    }, []);

    // Render the component
    return (
        <section className="d-flex justify-content-center align-items-center flex-column mt-3 w-100">
            <form>
                <select name="reservationPicker" onChange={props.onChange}>
                    <option value="" >Choisir une machine</option>
                    {reservations.map(reservation => (
                        <option key={"option-" + reservation._id} value={reservation._id} name={reservation._id}>
                            {reservation.usernotlogged} {reservation.machine.name}
                        </option>
                    ))}
                </select>
            </form>
        </section>
    )
}