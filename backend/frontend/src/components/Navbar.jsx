import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#" className="navbar-logo">
                <img
                    className="logo"
                    src="/public/logopetcare.png"
                    style={{ width: "80px", height: "80px" }}
                />
            </a>
            <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li className="menu-item">
                    <a href="#home" className="menu-link">Home</a>
                </li>
                <li className="menu-item">
                    <a href="#link" className="menu-link">¿Quiénes somos?</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link">Dropdown</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
