import React, { useState } from 'react';
import './Navbar.css';

const Dupnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className="hamburger"></div>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Dupnav;
