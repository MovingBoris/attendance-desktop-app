import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Attendance</div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/">
          <li><a href="#">Home</a></li>
        </Link>
      </ul>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </nav>
  );
}

export default Navbar;