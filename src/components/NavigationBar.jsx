import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle logout
    const handleLogout  = async () => {
        
        try {
            const response = await fetch('/logout', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                
            });
    
            if (!response.ok) {
                throw new Error('Logout request failed');
            }
    
            window.location.href = '/login'; // Redirect to the login page
        } catch (error) {
            console.error('Error:', error);
        }
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
                    <Link to="/Classes">Courses</Link>
                </li>
                <li>
                    <Link to="/ViewInstructors">Instructors</Link>
                </li>
                <li>
                    <button id="logout" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
            </div>
        </nav>
    );
}

export default Navbar;
