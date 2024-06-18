import React, { useState } from 'react';
import './NavbarSesion.css';
import imagenFondo from "../assets/logopetcare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMenuLeave = () => {
    setIsDropdownOpen(false);
  };

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
          <a href="#link" className="menu-link"> <FontAwesomeIcon icon= {faEnvelope} /> Notificaciones </a>
        </li>
        <li
          className="menu-item dropdown"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          <a href="#" className="menu-link"> <FontAwesomeIcon icon={faUser} /> </a>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
            <li className="dropdown-menu-item">
              <a href="#action/1" className="dropdown-menu-link">Action</a>
            </li>
            <li className="dropdown-menu-item">
              <a href="#action/2" className="dropdown-menu-link">Another action</a>
            </li>
            <li className="dropdown-menu-item">
              <a href="#action/3" className="dropdown-menu-link">Something</a>
            </li>
            <li className="dropdown-menu-item">
              <a href="#action/4" className="dropdown-menu-link">Separated link</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
