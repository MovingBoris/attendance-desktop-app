import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import "./TableFormat.css"; // Import CSS file for styling

function AdminInstructors() {
    const [instructors, setInstructors] = useState([]);
    const [error, setError] = useState(null);

    const handleGetInstructors = async () => {
        try {
            const response = await fetch("/api/Users"); 
            if (!response.ok) {
                throw new Error("Failed to fetch instructors");
            }
            const data = await response.json();
            // Extract the array of instructors from the response data
            const instructorsData = data.$values || []; 
            setInstructors(instructorsData);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        handleGetInstructors(); // this calls the function when the page loads
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div className="admin-instructors-container">
            <Navbar />
            <table className="tableAPI">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors.map((instructor, index) => (
                        <tr key={index} className="instructor-row">
                            <td>{instructor.userId}</td>
                            <td>{instructor.userName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {error && <p className="error-message">Error: {error}</p>}
        </div>
    );
}

export default AdminInstructors;
