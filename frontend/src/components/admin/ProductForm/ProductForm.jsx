import React, { useState } from 'react';
import api from '../../../api';
import { FormField } from '../../commons';
import "./ProductForm.css";


/**
 * This component allow admin user to
 * create Products and add them to the
 * database
 * @param props
 * @returns {JSX.Element}
 */
export function ProductForm(props) {

    // Variable
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [tarif, setTarif] = useState('');
    const [stock, setStock] = useState('');

    // Manage admin user input
    const handleSubmit = () => {
        api.insertNew('/add-product', {
            name: name,
            tarif: tarif,
            category: category,
            stock: stock
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    // Display the product creation form
    return (
        <section>
            <form onSubmit={handleSubmit} className="log-form">
                <FormField label="Name" type="text" placeholder="Name" callback={fieldValue => setName(fieldValue)} />
                <FormField label="Tarif" type="number" placeholder="Tarif" callback={fieldValue => setTarif(fieldValue)} />
                <FormField label="Category" type="text" placeholder="Category" callback={fieldValue => setCategory(fieldValue)} />
                <FormField label="Stock" type="number" placeholder="Stock" callback={fieldValue => setStock(fieldValue)} />
                <FormField label="Submit" type="submit" />
            </form>
        </section>
    )
}