import React, { useState } from "react";
import Navbar from "../components/NavigationBar";

function AddAttendance() {
  const YourComponent = () => {
    const [studentUserName, setStudentUserName] = useState('');
    const [classId, setClassId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleStudentUserNameChange = (event) => {
      setStudentUserName(event.target.value);
    };

    const handleClassIdChange = (event) => {
      setClassId(event.target.value);
    };

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };

    const handleUpload = async () => {
      if (!studentUserName || !classId || !date || !time) {
        alert('Please fill in all fields.');
        return;
      }

      // Combine date and time into a single string in ISO 8601 format
      const dateTime = `${date}T${time}:00`;

      const requestData = {
        StudentUserName: studentUserName,
        ClassId: parseInt(classId),
        AttendanceDateTime: dateTime
      };

      try {
        const response = await fetch('api/Attends', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData),
        });
        if (response.ok) {
          alert('Attendance uploaded successfully!');
          // Optionally, you can redirect the user to another page
        } else {
          const errorMessage = await response.text();
          alert(`Error: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(`An error occurred while uploading attendance. ${error}`);
      }
    };

    return (
      <div style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label htmlFor="studentUserNameInput" style={styles.label}>Student Username:</label>
          <input id="studentUserNameInput" type="text" value={studentUserName} onChange={handleStudentUserNameChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="classIdInput" style={styles.label}>Class ID:</label>
          <input id="classIdInput" type="number" value={classId} onChange={handleClassIdChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dateInput" style={styles.label}>Date:</label>
          <input id="dateInput" type="date" value={date} onChange={handleDateChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="timeInput" style={styles.label}>Time:</label>
          <input id="timeInput" type="time" value={time} onChange={handleTimeChange} style={styles.input} />
        </div>
        <button onClick={handleUpload} style={styles.button}>Upload Attendance</button>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <YourComponent />
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  formContainer: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px 0",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default AddAttendance;
