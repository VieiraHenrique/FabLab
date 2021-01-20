import React, { useState, useEffect } from 'react';
import api from '../../../api';
import { Link } from 'react-router-dom';
import { FormField } from '../../commons';
import "./userForm.css";


export function UsersForm() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('text');


    useEffect(() => {
        fetchData();

    }, []);
    async function fetchData() {
        setIsLoaded(true);
        await api.getAll('/users')
            .then((data) => {
                setIsLoaded(true);
                setUsers(data.data);

            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    async function deleteItemById(type, id, name) {
        try {
            let txt;
            if (window.confirm(`Voulez vous supprimer un(e) ${type}`)) {
                txt = true;
            } else {
                txt = false;
            }
            if (txt) {
                await api.deleteById(`/delete-${type}`, id)
                    .then((res) => {
                        if (res.status === 200) {
                            setMessage(`${name} supprimé(e)`);
                            fetchData(`${type}`);
                        } else {
                            setMessage(`Probleme`);
                        }
                    })
            } else {
                console.log('delete not CONFIRM !!!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <section className="d-flex justify-content-center align-items-center flex-column mt-3">
                <section className={"white-container"}>
                    <h2>Utilisateurs</h2>
                    <table className="table">
                        <thead className="banner-list">
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Modifier</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={"list-" + user._id}>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>
                                        <Link to={`user-edit/${user._id}`}>
                                            <i className="far fa-edit edit-icon"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <FormField type="button" callback={() => deleteItemById('user', user._id, user.email)}>
                                            <i className="far fa-trash-alt delete-icon"></i>
                                        </FormField>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>
        );
    }
}