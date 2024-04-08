import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import "./TableFormat.css"; // Import CSS file for styling

function AdminClasses() {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState(null);

    const handleGetClasses = async () => {
        try {
            // set api endpoint here
            const response = await fetch("/api/classes"); 
            if (!response.ok) {
                throw new Error("Failed to fetch classes");
            }
            const data = await response.json();
            setClasses(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        handleGetClasses(); // this calls the function when the page loads
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div>
            <Navbar />
            {error && <p>{error}</p>}
            <table className="tableAPI">
                <thead>
                    <tr>
                        <th>Class ID</th>
                        <th>Semester Code</th>
                        <th>Room</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Days</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classItem, index) => (
                        <tr key={index}>
                            <td>{classItem.classId}</td>
                            <td>{classItem.semesterCode}</td>
                            <td>{classItem.room}</td>
                            <td>{classItem.startTime}</td>
                            <td>{classItem.endTime}</td>
                            <td>{classItem.days}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminClasses;
