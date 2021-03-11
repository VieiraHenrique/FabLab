import React, { useState } from 'react';
import api from '../../../api';
import { FormField } from '../../commons';
import "./MachineForm.css";


/**
 * This component allows admin users
 * to create a new Machine
 * @param props
 * @returns {JSX.Element}
 */
export function MachineForm(props) {

    // Variables
    const [name, setName] = useState('');
    const [tarif, setTarif] = useState('');
    const [disponibilite, setDisponibilite] = useState('');
    const [commentaires, setCommentaires] = useState('');
    const handleAvailability = (availability) => {
        (availability === "Oui") ? setDisponibilite(true) : setDisponibilite(false);
    }
    const handleSubmit = () => {
        api.insertNew('/add-machine', {
            name: name,
            tarif: tarif,
            available: disponibilite,
            comment: commentaires
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    // Render the Machine creation form
    return (
        <section className="login-main">
            <h1>Add a machine</h1>
            <article className="login-form">

                <form onSubmit={handleSubmit} className="log-form">
                    {/* {(typeof props.edit !== 'undefined' && props.edit) ? "Modifier" : "Ajouter une machine"} */}
                    <FormField className="input" label="Name" type="text" placeholder="Name" callback={fieldValue => setName(fieldValue)} />
                    <FormField label="Tarif" type="number" placeholder="€" callback={fieldValue => setTarif(fieldValue)} />
                    <p class="display">Display machine</p>
                    <FormField label="Yes" type="radio" name="Disponibilite" callback={fieldValue => handleAvailability(fieldValue)} />
                    <FormField label="No" type="radio" name="Disponibilite" callback={fieldValue => handleAvailability(fieldValue)} />
                    <FormField label="Comments" type="textarea" placeholder="Comments" callback={fieldValue => setCommentaires(fieldValue)} />
                    <FormField label="Submit" type="submit" />
                </form>
            </article>
        </section>
    )
}