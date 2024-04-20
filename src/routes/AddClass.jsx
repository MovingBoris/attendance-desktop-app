import React, { useState } from "react";
import Navbar from "../components/NavigationBar";

function CreateClass() {
  const [formData, setFormData] = useState({
    semesterCode: "",
    room: "",
    startTime: "",
    endTime: "",
    days: "",
    instructorId: "", // Changed to string type
    isActive: "", // Changed to string type
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedFormData = {
        ...formData,
        instructorId: parseInt(formData.instructorId), // Parse instructorId as integer
        isActive: formData.isActive === "true" // Convert isActive to boolean
      };

      const response = await fetch("/api/Classes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        alert("Class created successfully!");
        window.location.href = '/AdminPage';
        // Clear form data after successful submission
        setFormData({
          semesterCode: "",
          room: "",
          startTime: "",
          endTime: "",
          days: "",
          instructorId: "",
          isActive: "",
        });
      } else {
        throw new Error("Failed to create class");
      }
    } catch (error) {
      console.error("Error creating class:", error);
      setError("Failed to create class. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <form onSubmit={handleFormSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="semesterCode" style={styles.label}>Semester Code:</label>
              <input
                type="text"
                id="semesterCode"
                name="semesterCode"
                value={formData.semesterCode}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="room" style={styles.label}>Room:</label>
              <input
                type="text"
                id="room"
                name="room"
                value={formData.room}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="startTime" style={styles.label}>Start Time (HH:mm:ss):</label>
              <input
                type="text"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="endTime" style={styles.label}>End Time (HH:mm:ss):</label>
              <input
                type="text"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="days" style={styles.label}>Days:</label>
              <input
                type="text"
                id="days"
                name="days"
                value={formData.days}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="instructorId" style={styles.label}>Instructor ID:</label>
              <input
                type="number"
                id="instructorId"
                name="instructorId"
                value={formData.instructorId}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="isActive" style={styles.label}>Active:</label>
              <select
                id="isActive"
                name="isActive"
                value={formData.isActive}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="">Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <button type="submit" style={styles.button}>Create Class</button>
          </form>
          {error && <p className="error-message" style={styles.errorMessage}>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    width: "100%",
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
  errorMessage: {
    color: "red",
  },
};

export default CreateClass;
