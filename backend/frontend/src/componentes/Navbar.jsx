import React, { useState } from 'react';
import './Navbar.css';

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
      <a href="#" className="navbar-logo">Logo</a>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <a href="#home" className="menu-link">Home</a>
        </li>
        <li className="menu-item">
          <a href="#link" className="menu-link">Link</a>
        </li>
        <li
          className="menu-item dropdown"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          <a href="#" className="menu-link">Dropdown</a>
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
