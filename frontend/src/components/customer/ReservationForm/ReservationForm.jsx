import React from 'react';
import api from '../../../api/index';
import DatePicker from "react-datepicker";
import { FormField } from '../../commons';
import { MachinePicker } from '../index';
import { useState } from "react";
import "./reservationForm.css";
import "react-datepicker/dist/react-datepicker.css";


/**
 * This component manage the reservation form,
 * one of the most important part of the project.
 * It allows a user to choose a Machine, a time slot
 * and then validate his reservation.
 * @param props
 * @returns {JSX.Element}
 */
export function ReservationForm(props) {

    // Variables
    const [date, setDate] = useState(new Date());
    const [startHour, setStartHour] = useState(new Date());
    const [endHour, setEndHour] = useState(new Date());
    // const [isLogged , setItsLogged] = useState(); TBD
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [machine, setMachine] = useState();
    const [comment, setComment] = useState();

    // Create a new reservation according to Reservation model and Machine ID
    const handleReservation = () => {
        let startDate = new Date(date);
        startDate.setHours(new Date(startHour).getHours(), new Date(startHour).getMinutes(), 0, 0);
        let endDate = new Date(date);
        endDate.setHours(new Date(endHour).getHours(), new Date(endHour).getMinutes(), 0, 0);
        try{
            api.insertNew('/add-reservation', {
                machine: machine,
                usernotlogged: name,
                userlogged : 'FALSE',
                startdate : startDate,
                enddate : endDate,
                comment: comment,
            }).then((response) => {

                console.log(response);
            }, (error) => {
                console.error(error);

            })
            // saveReservationInInvoices(); TBD
        } catch (error) {
            console.log(error);
        }
    }

    // Manage user Machine's choice
    let handleChange = (event) => {
        setMachine(event.target.value);
    }

    // Display Reservation form
    return (
        <section className="main-form">
            <article className="res-form">
                <form onSubmit={handleReservation}>
                    <MachinePicker onChange={handleChange} />
                    <p className={"steps"}>2 - VOS COORDONNEES </p>
                    <article id="name-email">
                        <FormField className={"step-field"} type="text" name="Nom" placeholder="Nom" callback={fieldValue => setName(fieldValue)} />
                        <FormField className={"step-field"} type="email" name="Email" placeholder="E-mail" callback={fieldValue => setMail(fieldValue)} />
                    </article>
                    <p className={"steps"}>3 - DATE, HEURE ET INFOS </p>

                    <section id="date-picker">
                        <article>
                            <p>Le</p>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={date}
                                filterDate={(date) => (date.getDay() !== 0 && date.getDay() !== 6)}
                                onChange={date => setDate(date)}
                                id="datepicker-element"
                            />
                        </article>
                        <article>
                            <p>De</p>
                            <DatePicker
                            selected={startHour}
                            filterTime={(time) => ((time.getHours() === 9 && time.getMinutes() === 30) || (time.getHours() > 9 && time.getHours() < 17) || (time.getHours() === 17 && time.getMinutes() === 0))}
                            onChange={startHour => setStartHour(startHour.setSeconds(0, 0))}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id="datepicker-element"
                            />
                        </article>
                        <article>
                            <p>À</p>
                            <DatePicker
                            selected={endHour}
                            filterTime={(time) => (time.getHours() >= 10 && time.getHours() <= 17)}
                            onChange={endHour => setEndHour(endHour.setSeconds(0, 0))}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            id="datepicker-element"
                            />
                        </article>
                    </section>
                    <article id={"need-help"}>
                        <p>Informations complémentaires</p>
                        <FormField className={"comment-area"} type="textarea" placeholder="Demandes spécifiques / Commentaires" callback={fieldValue => setComment(fieldValue)} />
                    </article>
                    <article className={"reservation-submit"}>
                        <FormField label="Je réserve !" type="submit" />
                    </article>
                </form>
            </article>
        </section>
    )
}