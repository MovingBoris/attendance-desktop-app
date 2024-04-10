import React, { useState } from "react";
import Navbar from "../components/NavigationBar";

function AdminAttendance() {
    const [attendance, setAttendance] = useState([]);
    const [error, setError] = useState(null);
    const [searchOption, setSearchOption] = useState("classId");
    const [searchValue, setSearchValue] = useState("");

    const handleGetAttendanceByClassId = async () => {
        try {
            const response = await fetch(`/api/Attends/by_class_id?classId=${searchValue}`);
            if (!response.ok) {
                throw new Error("Failed to fetch attendance by Class ID");
            }
            const data = await response.json();
            setAttendance(data.map(item => ({
                ...item,
                attendanceDate: new Date(item.attendanceDate).toLocaleString()
            })));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGetAttendanceByStudentUsername = async () => {
        try {
            const response = await fetch(`/api/Attends/by_username?studentUsername=${searchValue}`);
            if (!response.ok) {
                throw new Error("Failed to fetch attendance by Student Username");
            }
            const data = await response.json();
            setAttendance(data.map(item => ({
                ...item,
                attendanceDate: new Date(item.attendanceDate).toLocaleString()
            })));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGetAttendance = async () => {
        if (searchOption === "classId") {
            await handleGetAttendanceByClassId();
        } else if (searchOption === "studentUsername") {
            await handleGetAttendanceByStudentUsername();
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
        await handleGetAttendance();
    };

    return (
        <div>
            <Navbar />
            
            <div style={styles.searchFormContainer}>
                <form onSubmit={handleSearchFormSubmit} style={styles.searchForm}>
                    <div style={styles.searchOptions}>
                        <label>
                            <input 
                                type="radio" 
                                value="classId" 
                                checked={searchOption === "classId"} 
                                onChange={handleOptionChange} 
                            />
                            Search by Class ID
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="studentUsername" 
                                checked={searchOption === "studentUsername"} 
                                onChange={handleOptionChange} 
                            />
                            Search by Student Username
                        </label>
                    </div>
                    <div style={styles.searchInput}>
                        <input 
                            type="text" 
                            value={searchValue} 
                            onChange={handleSearchInputChange} 
                            placeholder={searchOption === "classId" ? "Enter Class ID" : "Enter Student Username"} 
                        />
                        <button style={styles.searchButton} type="submit">Search</button>
                    </div>
                </form>
            </div>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <table style={styles.attendanceTable}>
                <thead>
                    <tr>
                        <th>Student UUID</th>
                        <th>Class ID</th>
                        <th>Attendance Date</th>
                        <th>Semester Code</th>
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

const styles = {
    errorMessage: {
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
    },
    searchFormContainer: {
        margin: "0 auto", // Center the container horizontally
        width: "80%", // Set width to 80% of the parent container
    },
    searchForm: {
        marginBottom: "20px",
        marginTop: "20px",
        height: "150px"
    },
    searchOptions: {
        marginBottom: "20px",
    },
    searchInput: {
        margin: "auto"
    },
    searchButton: {
        marginLeft: "10px",
        padding: "10px 20px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
        fontSize: "16px",
    },
    attendanceTable: {
        width: "100%",
        borderCollapse: "collapse",
    },
};

export default AdminAttendance;
