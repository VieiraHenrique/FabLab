import React from 'react';
import './header.css';
import logo from '../../../assets/images/logo-header.png';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
console.log(props);
    let isLogged = props.user.loggedIn;

    return (
        <header className={"hea-main"}>
            <section className={"header-logo"}>
                <Link to="/" className={`head-link${useLocation().pathname === "/" ? " is-current" : ""}`}>
                    <img  className={"header-logo"} src={logo} alt='Logo FabLab'/>
                </Link>
            </section>
            <section className={"hea-btn-group"}>
                <article>
                    <Link to="/admin/agenda" id={"btn-admin"} className={`head-link${useLocation().pathname.match(`/admin[sS]*`) ? " is-current" : ""}`} style={{display: (!isLogged) ? 'block' : 'block'}}>
                        <i className="fas fa-cogs"/>
                    </Link>
                </article>
                <article>
                    <Link to="/login" id={"btn-login"} className={`head-link${useLocation().pathname === "/login" ? " is-current" : ""}`} style={{display: (!isLogged) ? 'block' : 'block'}}>
                        <i className="fas fa-user"/>
                    </Link>
                </article>
            </section>
        </header>
    )
}

export {
    Header
};