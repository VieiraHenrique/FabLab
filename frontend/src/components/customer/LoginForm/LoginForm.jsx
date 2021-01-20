import React, { useState } from 'react';
// import { FormField } from '../../commons/FormField/FormField'; The component should use FormField !
import './loginForm.css';
import { Link } from 'react-router-dom';
import api from '../../../api';

const LoginForm = () =>{
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleSubmit = ()=>{
        api.getBy('/auth', userEmail,{
            email: userEmail, 
            password: userPassword
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.error(error);
            
        });
    }

    return(
        <section className={"main-login"}>
            <article className={"login-form"}>
                <form onSubmit={handleSubmit}>
                    <section className={"login-field"}>
                        <p><label>E-mail</label></p>
                        <p><input type="email" placeholder="Email" required={true} onChange={e => setUserEmail(e.target.value)}/></p>
                    </section>
                    <section className={"login-field"}>
                        <p><label>Mot de passe</label></p>
                        <p><input type="password" placeholder={"Mot de passe"} required={true} onChange={e => setUserPassword(e.target.value)}/></p>
                    </section>
                    <section className={"login-submit"}>
                        <p><input label={"submit"} type={"submit"} value={"Se connecter"} /></p>
                        <Link to="/register" className="not-signed-up"><p>Pas encore enregistré?</p></Link>
                    </section>
                </form>
            </article>
        </section>

    )
};

export {
    LoginForm
};