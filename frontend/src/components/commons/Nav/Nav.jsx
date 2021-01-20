import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFile, faInfoCircle, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <section className={"main-nav"}>
            <nav className={"nav-main"}>
                <div className={"nav-link-main"}>
                    <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}><FontAwesomeIcon icon={faHome} /></Link>
                    <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}><FontAwesomeIcon icon={faShoppingBasket} /></Link>
                    <Link to="/files" className={`nav-link${useLocation().pathname === "/files" ? " is-current" : ""}`}><FontAwesomeIcon icon={faFile} /></Link>
                    <Link to="/register" className={`nav-link${useLocation().pathname === "/register" ? " is-current" : ""}`}><FontAwesomeIcon icon={faInfoCircle} /></Link>
                </div>
            </nav>
        </section>
    )
}

export {
    Nav
};