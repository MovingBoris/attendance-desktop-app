import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // State to manage the logout confirmation popup
    const navigate = useNavigate(); // Use navigate hook for redirection

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Show the logout confirmation popup
        setShowLogoutConfirmation(true);
    };

    // Function to confirm logout
    const confirmLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                // no request body needed
            });

            if (response.ok) {

                navigate("/login");

            } else {

                console.error('Logout failed');
            }
        } catch (error) {
            // Handle network error or other exceptions
            console.error('Error during logout:', error);
        }
    };

    // Function to cancel logout
    const cancelLogout = () => {
        // Hide the logout confirmation popup
        setShowLogoutConfirmation(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={'/images/AttendanceLogo.jpg'} alt="Logo" className="logo-image" />
                <div className="separator"></div> {/* Add separator bar */}
                <div className="dropdown">
                    <button className="dropbtn"> NESCC Attendance</button>
                    <div className="dropdown-content">
                        <Link to="/AddAttendance">Mark Attendance</Link>
                        <Link to="/AdminAttendance">View Attendance</Link>
                        <Link to="/">Attendance Reports</Link>
                    </div>
                </div>
            </div>
            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                <li>
                    <Link to="/AdminPage">Home</Link>
                </li>
                <li>
                    <Link to="/AdminAttendance">Students</Link>
                </li>
                <li>
                    <Link to="/Classes">Courses</Link>
                </li>
                <li>
                    <Link to="/ViewInstructors">Instructors</Link>
                </li>
                <li>
                    <Link to="#" onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
            </div>

            {/* Logout confirmation popup */}
            {showLogoutConfirmation && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to logout?</p>
                        <button onClick={confirmLogout}>Yes</button>
                        <button onClick={cancelLogout}>No</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
