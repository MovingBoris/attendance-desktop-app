import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import "./TableFormat.css"; 

function AdminClasses() {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState(null);

    const handleGetClasses = async () => {
        try {
            const response = await fetch("/api/classes"); 
            if (!response.ok) {
                throw new Error("Failed to fetch classes");
            }
            const data = await response.json();
            // Extract the array of classes from the response data
            const classesData = data.$values || []; 
            setClasses(classesData);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        handleGetClasses(); // this calls the function when the page loads
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div className="admin-classes-container">
            <Navbar />
            <table className="tableAPI">
                <thead>
                    <tr>
                        <th className="class-id">Class ID</th>
                        <th className="semester-code">Semester Code</th>
                        <th className="room">Room</th>
                        <th className="start-time">Start Time</th>
                        <th className="end-time">End Time</th>
                        <th className="days">Days</th>
                        <th className="instructor-id">Instructor ID</th>
                        <th className="active">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classItem) => (
                        <tr key={classItem.$id} className="class-row">
                            <td className="class-id">{classItem.classId}</td>
                            <td className="semester-code">{classItem.semesterCode}</td>
                            <td className="room">{classItem.room}</td>
                            <td className="start-time">{classItem.startTime}</td>
                            <td className="end-time">{classItem.endTime}</td>
                            <td className="days">{classItem.days}</td>
                            <td className="instructor-id">{classItem.instructorId}</td>
                            <td className="active">{classItem.isActive ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {error && <p className="error-message">Error: {error}</p>}
        </div>
    );
}

export default AdminClasses;
