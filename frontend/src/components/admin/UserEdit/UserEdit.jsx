import React, { useState, useEffect } from 'react';
import api from '../../../api';
import { useLocation } from 'react-router-dom';
import { FormField } from "../../commons";
import './userEdit.css';

export function UserEdit() {
    let params = useLocation().pathname.split('/');
    let id = params[3];
    let user;
    const [idUser, setIdUser] = useState(params[3]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [company, setCompany] = useState('');
    const [type, setType] = useState('');

    const getUserById = async () => {
        user = await api.getById('/user', id);
        setFirstname(user.data.firstname);
        setLastname(user.data.lastname);
        setEmail(user.data.email);
        setTel(user.data.tel);
        setCompany(user.data.company);
        setType(user.data.usertype);
    }

    useEffect(() => {
        getUserById();
    }, []);

    const handleSubmit = async () => {
        await api.updateById('/edit-user', idUser, {
            // id: idUser,
            firstname: firstname,
            lastname: lastname,
            email: email,
            tel: tel,
            company: company,
            type: type
        }).then((response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });
    }

    return (
        <section className="main-edit-user">
            <section class="register-header"><h1>Modification</h1></section>
            <article className="white-container">
                <section>
                    <form onSubmit={handleSubmit}>
                        <FormField type="text" value={firstname} label="Nom" callback={c => setFirstname(c)} />
                        <FormField type="text" value={lastname} label="Prénom" callback={c => setLastname(c)} />
                        <FormField type="text" value={email} label="Email" callback={c => setEmail(c)} />
                        <FormField type="text" value={tel} label="Tel" callback={c => setTel(c)} />
                        <FormField type="text" value={company} label="Company" callback={c => setCompany(c)} />
                        <FormField type="text" value={type} label="Type" callback={c => setType(c)} />
                        <FormField type="submit" label="Update" />
                    </form>
                </section>
            </article>
        </section>

    )
}


