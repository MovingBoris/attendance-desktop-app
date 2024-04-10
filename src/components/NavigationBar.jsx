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
            <div className="navbar-logo">
                <img src={'/images/AttendanceLogo.jpg'} alt="Logo" className="logo-image" />
                <div className="separator"></div> {/* Add separator bar */}
                <div className="dropdown">
                    <button className="dropbtn"> NESCC Attendance</button>
                    <div className="dropdown-content">
                        <Link to="/">Mark Attendance</Link>
                        <Link to="/">View Attendance</Link>
                        <Link to="/">Attendance Reports</Link>
                    </div>
                </div>
            </div>
            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                <li>
                    <Link to="/AdminPage">Home</Link>
                </li>
                <li>
                    <Link to="/">Students</Link>
                </li>
                <li>
                    <Link to="/">Courses</Link>
                </li>
                <li>
                    <Link to="/">Instructors</Link>
                </li>
                <li>
                    <Link to="/">Settings</Link>
                    
                </li>
            </ul>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
            </div>
        </nav>
    );
}

export default Navbar;
