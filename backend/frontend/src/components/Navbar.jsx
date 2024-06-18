import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import imagenFondo from "../assets/logopetcare.png";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#"> <img className="logo-navbar" src={imagenFondo} alt="" /> </a>
            
            <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li className="menu-item">
                    <a href="#home" className="menu-link"> Home </a>
                </li>
                <li className="menu-item">
                    <a href="#link" className="menu-link"> ¿Quiénes somos? </a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link">
                        <FontAwesomeIcon icon={faUser} /> Iniciar sesión
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
