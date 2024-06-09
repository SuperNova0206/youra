import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeSwitchButton from '../Button/Button';
import 'animate.css';
import LogoutPage from '../auth/LogoutPage';
import { selectAuth } from '../../store/ProfileSlice';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const auth = useSelector(selectAuth);

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
                            <Link to="/materiels" className="nav-link">
                                <i className="bi bi-laptop"></i> Matériels
                            </Link>
                        </li>
                        {auth.isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        {auth.user && auth.user.user_name}
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <LogoutPage />
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    <i className="bi bi-box-arrow-in-right"></i> Se connecter
                                </Link>
                            </li>
                        )}
                    </ul>
                    <ThemeSwitchButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;