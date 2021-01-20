import React, { useState, useEffect } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';
import { FormField } from '../../commons';
import './management.css';


/**
 *  This component allow admin user to
 *  edit Machines and Products
 * @returns {JSX.Element}
 */
export function Management(props) {

    // Variables
    const [machines, setMachines] = useState([]);
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    // Get data from database
    async function fetchAllData(type) {
        await api.getAll(`/${type}s`)
        .then((data) => {
            if (type === "machine") {
                setMachines(data.data);
            } else if (type === "product") {
                setProducts(data.data);
            }
        },
        (error) => {
            setError(error);
        }
    )}

    // Delete an item according to its type, ID and name
    async function deleteItemById(type, id, name){
        try {
            let txt;
            txt = window.confirm(`Voulez vous supprimer un(e) ${type}`);
            if(txt){
                await api.deleteById(`/delete-${type}`, id)
                .then((res) => {
                    if (res.status === 200) {
                        setMessage(`${name} supprimé(e)`);
                        fetchAllData(`${type}`);
                    } else {
                        setMessage(`Un problème est survenu`);
                    }
                })
            }else{
                console.log('Error - Delete has not worked');
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchAllData("machine");
        fetchAllData("product");
    }, []);

    // Render the edition tools
    return (
        <>
            <section className={"main-list"}>
                <article className="white-container">
                    {message}
                    <section className="list-title">
                        <h2>Machines</h2>
                        <Link to={`/admin/add-machine`}>
                            <i className="far fa-plus-square add-icon"></i>
                        </Link>
                    </section>
                    <table className="table text-center">
                        <thead className="banner-list">
                        <tr>
                            <th>Nom</th>
                            <th>Tarif</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {machines.map(machine => (
                            <tr key={"list-" + machine._id}>
                                <td>{machine.name}</td>
                                <td>{machine.tarif}€/h</td>
                                <td>
                                    <Link to={`edit/machine/${machine._id}`}>
                                        <i className="far fa-edit edit-icon"></i>
                                    </Link>
                                </td>
                                <td>
                                    <FormField type="button" callback={() => deleteItemById('machine', machine._id, machine.name)}>
                                        <i className="far fa-trash-alt delete-icon"></i>
                                    </FormField>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </article>
            </section>
            <section className="main-list">
                <article className={"white-container"}>
                    <section className="list-title">
                        <h2>Produits</h2>
                        <Link to={`/admin/add-product`}>
                            <i className="far fa-plus-square add-icon"></i>
                        </Link>
                    </section>
                    <table className="table text-center">
                        <thead className={"banner-list"}>
                        <tr>
                            <th>Nom</th>
                            <th>Tarif</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map(product => (
                            <tr key={"list-" + product._id}>
                                <td>{product.name}</td>
                                <td>{product.tarif}€/h</td>
                                <td>
                                    <Link to={`edit/product/${product._id}`}>
                                        <i className="far fa-edit edit-icon"></i>
                                    </Link>
                                </td>
                                <td>
                                    <FormField type="button" callback={() => deleteItemById('product', product._id)}>
                                        <i className="far fa-trash-alt delete-icon"></i>
                                    </FormField>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </article>
            </section>
        </>
    );
}