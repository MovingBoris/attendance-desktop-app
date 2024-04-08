import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import "./TableFormat.css"; // Import CSS file for styling

function AdminInstructors() {
    const [instructors, setInstructors] = useState([]);
    const [error, setError] = useState(null);

    const handleGetInstructors = async () => {
        try {
            // set api endpoint here
            const response = await fetch("/api/Users"); 
            if (!response.ok) {
                throw new Error("Failed to fetch instructors");
            }
            const data = await response.json();
            setInstructors(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        handleGetInstructors(); // this calls the function when the page loads
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div>
            <Navbar />
            {error && <p>{error}</p>}
            <table className="tableAPI">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors.map((instructorItem, index) => (
                        <tr key={index}>
                            <td>{instructorItem.userId}</td>
                            <td>{instructorItem.userName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminInstructors;
