import React, { useState, useEffect } from "react";
import Navbar from "../components/NavigationBar";
import "./TableFormat.css";

function EditAttendance() {
    const [attendance, setAttendance] = useState([]);
    const [error, setError] = useState(null);
    const [searchOption, setSearchOption] = useState("classId");
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        handleGetAttendance();
    }, []);

    const handleGetAttendanceByClassId = async () => {
        try {
            const response = await fetch(`/api/Attends/class-id/${searchValue}`);
            if (!response.ok) {
                throw new Error("Failed to fetch attendance by Class ID");
            }
            const data = await response.json();
            const attendanceData = data.$values || [];
            setAttendance(attendanceData.map(item => ({
                ...item,
                attendanceDate: new Date(item.attendanceDate).toLocaleString()
            })));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGetAttendanceByStudentUsername = async () => {
        try {
            const response = await fetch(`/api/Attends/by-username/${searchValue}`);
            if (!response.ok) {
                throw new Error("Failed to fetch attendance by Student Username");
            }
            const data = await response.json();
            const attendanceData = data.$values || [];
            setAttendance(attendanceData.map(item => ({
                ...item,
                attendanceDate: new Date(item.attendanceDate).toLocaleString()
            })));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGetAttendance = async () => {
        try {
            if (searchOption === "classId") {
                await handleGetAttendanceByClassId();
            } else if (searchOption === "studentUsername") {
                await handleGetAttendanceByStudentUsername();
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleOptionChange = (event) => {
        setSearchOption(event.target.value);
    };

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearchFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await handleGetAttendance();
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="searchFormContainer">
                <form onSubmit={handleSearchFormSubmit} className="searchForm">
                    <div className="searchOptions">
                        <label className="radioLabel">
                            <input 
                                type="radio" 
                                value="classId" 
                                checked={searchOption === "classId"} 
                                onChange={handleOptionChange} 
                            />
                            Search by Class ID
                        </label>
                        <label className="radioLabel">
                            <input 
                                type="radio" 
                                value="studentUsername" 
                                checked={searchOption === "studentUsername"} 
                                onChange={handleOptionChange} 
                            />
                            Search by Student Username
                        </label>
                    </div>
                    <div className="searchInput">
                        <input 
                            type="text" 
                            value={searchValue} 
                            onChange={handleSearchInputChange} 
                            placeholder={searchOption === "classId" ? "Enter Class ID" : "Enter Student Username"} 
                        />
                        <button className="searchButton" type="submit">Search</button>
                    </div>
                </form>
            </div>
            {error && <p className="error-message">{error}</p>}
            <table className="tableAPI">
                <thead>
                    <tr>
                        <th>Student UUID</th>
                        <th>Class ID</th>
                        <th>Attendance Date</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((attendanceItem, index) => (
                        <tr key={index}>
                            <td>{attendanceItem.studentUuid}</td>
                            <td>{attendanceItem.classId}</td>
                            <td>{attendanceItem.attendanceDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EditAttendance;
