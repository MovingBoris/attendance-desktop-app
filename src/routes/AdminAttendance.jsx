import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import "./TableFormat.css"; // Import CSS file for styling

function AdminAttendance() {
    const [attendance, setAttendance] = useState([]);
    const [error, setError] = useState(null);

    const handleGetAttendance = async () => {
        try {
            // set api endpoint here
            const response = await fetch("/api/Attends"); 
            if (!response.ok) {
                throw new Error("Failed to fetch attendance");
            }
            const data = await response.json();
            setAttendance(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        handleGetAttendance(); // this calls the function when the page loads
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <div>
            <Navbar />
            {error && <p>{error}</p>}
            <table className="tableAPI">
                <thead>
                    <tr>
                        <th>Student UUID</th>
                        <th>Class Id</th>
                        <th>Attendance Date</th>
                        <th>SemesterCode</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((attendanceItem, index) => (
                        <tr key={index}>
                            <td>{attendanceItem.studentUuid}</td>
                            <td>{attendanceItem.classId}</td>
                            <td>{attendanceItem.attendanceDate}</td>
                            <td>{attendanceItem.semesterCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminAttendance;
