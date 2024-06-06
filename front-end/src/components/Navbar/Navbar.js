// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitchButton from '../Button/Button';
import 'animate.css'; // Importer animate.css
import LogoutPage from '../auth/LogoutPage';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__fadeIn ${isOpen ? 'animate__fadeIn' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="img/ofppt.png" alt="Logo OFPPT" className="d-block w-25 mx-auto p-4" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/formateurs" className="nav-link">
                                <i className="bi bi-person-fill"></i> Formateurs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/materiels" className="nav-link">
                                <i className="bi bi-laptop"></i> Matériels
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <i className="bi bi-box-arrow-in-right"></i> Se connecter
                            </Link>
                        </li>
                    </ul>
                </div>
                <LogoutPage/>
                <ThemeSwitchButton />
            </div>
        </nav>
    );
};

export default Navbar;
